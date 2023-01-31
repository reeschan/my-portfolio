import { Construct } from "constructs";
import {CfnElement, RemovalPolicy, Stack, StackProps} from "aws-cdk-lib"
import * as DynamoDB from 'aws-cdk-lib/aws-dynamodb'


export class DynamoDbStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new DynamoDB.Table(this, "my-portfolio-skill", {
      tableName: "my-portfolio-skill",
      partitionKey: { name: 'name', type: DynamoDB.AttributeType.STRING },
      billingMode: DynamoDB.BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.RETAIN,
    })

    new DynamoDB.Table(this, "my-portfolio-career", {
      tableName: "my-portfolio-career",
      partitionKey: { name: 'title', type: DynamoDB.AttributeType.STRING },
      billingMode: DynamoDB.BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.RETAIN,
    })
  }
}