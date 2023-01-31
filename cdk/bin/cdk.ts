#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrPipelineStack } from '../lib/ecr-pipeline-stack';
import { AppRunnerStack } from '../lib/apprunner-stack';

const app = new cdk.App();

const region = "ap-northeast-1";
const accountId = "037063970487"

const synthesizeProps = {
  fileAssetsBucketName:"next-mui-app-work-dev"
}

new EcrPipelineStack(app, "ecr-pipeline-stack", {
  synthesizer: new cdk.CliCredentialsStackSynthesizer(synthesizeProps),
  env: {
    region: region,
    account:accountId
  }
})

new AppRunnerStack(app, "apprunner-stack", {
  synthesizer: new cdk.CliCredentialsStackSynthesizer(synthesizeProps),
  env: {
    region: region,
    account:accountId
  }
})