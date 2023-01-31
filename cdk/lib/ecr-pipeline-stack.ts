import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as codecommit from 'aws-cdk-lib/aws-codecommit'
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline'
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'


export class EcrPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The ECR repository we will get built by our Code Pipeline
    const ecr_repo = new ecr.Repository(this, 'my-portfolio-app-ecr', {
      repositoryName:'my-portfolio-app-ecr'
    });

    // CodeCommit repository that contains the Dockerfile used to build our ECR image: 
    const code_repo = codecommit.Repository.fromRepositoryName(this,"my-portfolio-app","my-portfolio-app");

    // Pipeline that triggers on pushes to CodeCommit repo to build our ECR image: 
    const pipeline = new codepipeline.Pipeline(this, 'MyPortfolioAppEcrPipeline', {
      pipelineName: 'MyPortFolioAppEcrPipeline'
    });

    // Configure our pipeline to pull in our Code Commit repo as the pipeline source: 
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipeline_actions.CodeCommitSourceAction({
      actionName: 'CodeCommit',
      repository: code_repo,
      output: sourceOutput,
      branch: "main",
      trigger: cdk.aws_codepipeline_actions.CodeCommitTrigger.POLL
    });
    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction]
    });
    
    /**
     * Create a CodeBuild project to build a Dockerfile into an image and push it to ECR.
     */
    const codebuildClientBuildCmd = codebuild.BuildSpec.fromSourceFilename("./buildspec/buildspec_build.yml");
    const project = new codebuild.PipelineProject(this, 'MyPortfolioAppCodeBuild', {
      environmentVariables: {
        // It is expected that our buildspec.yml in our source code will reference
        // this environment variable to determine which ECR repo to push the built image. 
        ECR_REPOSITORY_URI: {
          type: codebuild.BuildEnvironmentVariableType.PLAINTEXT,
          value: ecr_repo.repositoryUri
        }
      },
      // privileged = true is needed in order to run docker build:
      environment: {
        privileged: true
      },
      buildSpec:codebuildClientBuildCmd
    });

    project.addToRolePolicy(new iam.PolicyStatement({
      resources: [ecr_repo.repositoryArn],
      actions: ['ecr:*'],
      effect: iam.Effect.ALLOW
    }));

    // Add our CodeBuild project to our CodePipeline
    const buildAction = new codepipeline_actions.CodeBuildAction({
      actionName: 'CodeBuild',
      project,
      input: sourceOutput
    });
    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction]
    });
  }
}