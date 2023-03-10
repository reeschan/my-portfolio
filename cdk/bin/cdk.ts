#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrPipelineStack } from '../lib/ecr-pipeline-stack';
import { AppRunnerStack } from '../lib/apprunner-stack';
import { DynamoDbStack } from '../lib/dynamodb-stack';

const app = new cdk.App();

const region = "ap-northeast-1";
const accountId = "your_account_id"

const synthesizeProps = {
  fileAssetsBucketName:"next-mui-app-work-dev"
}

new EcrPipelineStack(app, "ecr-pipeline-stack", {
  synthesizer: new cdk.CliCredentialsStackSynthesizer(synthesizeProps),
  env: {
    region: region,
    account: accountId
  }
})

new AppRunnerStack(app, "apprunner-stack", {
  synthesizer: new cdk.CliCredentialsStackSynthesizer(synthesizeProps),
  env: {
    region: region,
    account: accountId
  }
})

new DynamoDbStack(app, "dynamodb-stack", {
  synthesizer: new cdk.CliCredentialsStackSynthesizer(synthesizeProps),
  env: {
    region: region,
    account: accountId
  }
})