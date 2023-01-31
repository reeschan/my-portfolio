import { SkillItem, SkillCategoryType } from "@/types/type";
import { DynamoDB } from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const SKILL_TABLE = "my-portfolio-skill";

const skill = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const dynamo = new DynamoDB.DocumentClient({
    convertEmptyValues: true,
  });

  switch (method) {
    case "GET":
      let mockSkills: SkillItem[] = [
        { name: "Typescript1", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Typescript2", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Typescript3", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Cd#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "C#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "Ce#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "Docker1", category: SkillCategoryType.DevOps, level: 5 },
        { name: "Dockcer2", category: SkillCategoryType.DevOps, level: 5 },
        { name: "Dockcer3", category: SkillCategoryType.DevOps, level: 5 },
      ];
      const paramsOfScanDynamo: DynamoDB.DocumentClient.ScanInput = {
        TableName: SKILL_TABLE,
      };
      const scanResult = (await dynamo.scan(paramsOfScanDynamo).promise())
        ?.Items as SkillItem[];

      if (scanResult?.length === 0) {
        res.json(mockSkills);
      } else {
        res.json(scanResult);
      }

    case "POST":
      const { name, category, level }: SkillItem = req.body;

      const item: DynamoDB.DocumentClient.PutItemInputAttributeMap = {
        name,
        category,
        level,
      };

      const paramsOfPutDynamo: DynamoDB.DocumentClient.PutItemInput = {
        TableName: SKILL_TABLE,
        Item: item,
      };

      const result = await dynamo.put(paramsOfPutDynamo).promise();

      console.log(result);

      res.json({ message: "POSTリクエスト" });
      break;
    default:
      res.json({ message: "GET/POSTでもないリクエストです。" });
      break;
  }
};

export default skill;
