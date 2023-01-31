import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ecr from 'aws-cdk-lib/aws-ecr'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as apprunner from '@aws-cdk/aws-apprunner-alpha'

export class AppRunnerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ecrRepo = ecr.Repository.fromRepositoryName(this, "my-portfolio-app-ecr", "my-portfolio-app-ecr") as ecr.Repository;

    new AppRunner(this, 'AppRunner', { repository:ecrRepo })
  }
}
  
interface AppRunnerProps {
  repository: ecr.Repository
}

export class AppRunner extends Construct {
  constructor(scope: Construct, id: string, props: AppRunnerProps) {
    super(scope, id)

    const { repository } = props

    // Application Code can Access AWS Resource with this Role
    const instanceRole = new iam.Role(scope, 'AppRunnerInstanceRole', {
      assumedBy: new iam.ServicePrincipal('tasks.apprunner.amazonaws.com'),
    })

    // Access AWS ECR Resrouce Role by App Runner
    const accessRole = new iam.Role(scope, 'AppRunnerAccessRole', {
      assumedBy: new iam.ServicePrincipal('build.apprunner.amazonaws.com'),
    })

    new apprunner.Service(scope, 'MyPortfolioService', {
      serviceName: 'MyPortfolioApp',
      source: apprunner.Source.fromEcr({
        imageConfiguration: {
          port: 3000
        },
        repository,
        tag: 'latest',
      }),
      instanceRole: instanceRole,
      accessRole: accessRole,
    })
  }
}