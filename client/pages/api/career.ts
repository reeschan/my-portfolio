import { CareerItem } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";
import { DynamoDB } from "aws-sdk";

const CAREER_TABLE = "my-portfolio-career";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const dynamo = new DynamoDB.DocumentClient({
    convertEmptyValues: true,
  });

  switch (method) {
    case "GET":
      let mockCareers: CareerItem[] = [
        {
          startDate: new Date(),
          endDate: new Date(),
          title: "",
          subtitle: "",
          description: "FirstCareer",
        },
        {
          startDate: new Date(),
          endDate: new Date(),
          title: "",
          subtitle: "",
          description: "SecondCareer",
        },
        {
          startDate: new Date(),
          endDate: new Date(),
          title: "",
          subtitle: "",
          description: "thirdCareer",
        },
      ];

      const paramsOfScanDynamo: DynamoDB.DocumentClient.ScanInput = {
        TableName: CAREER_TABLE,
      };

      const scanResult = (await dynamo.scan(paramsOfScanDynamo).promise())
        ?.Items as CareerItem[];
      if (scanResult?.length === 0) {
        res.json(mockCareers);
      } else {
        res.json(scanResult);
      }

    case "POST":
      const { startDate, endDate, title, subtitle, description }: CareerItem =
        req.body;
      const item: DynamoDB.DocumentClient.PutItemInputAttributeMap = {
        startDate,
        endDate,
        title,
        subtitle,
        description,
      };

      const paramsOfPutDynamo: DynamoDB.DocumentClient.PutItemInput = {
        TableName: CAREER_TABLE,
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
