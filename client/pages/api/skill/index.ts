import { SkillItem,SkillCategoryType} from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      let mockSkills: SkillItem[] = [{ name: "Typescript1", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Typescript2", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Typescript3", category: SkillCategoryType.FrontEnd, level: 5 },
        { name: "Cd#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "C#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "Ce#", category: SkillCategoryType.BackEnd, level: 5 },
        { name: "Docker1", category: SkillCategoryType.DevOps, level: 5 },
        { name: "Dockcer2", category: SkillCategoryType.DevOps, level: 5 },
        { name: "Dockcer3", category: SkillCategoryType.DevOps, level: 5 },]
      
      res.json(mockSkills);
      break;
    case 'POST':
      const { name, category, level }: SkillItem = req.body
      res.json({ message: 'POSTリクエスト' });
      break;
    default:
      res.json({ message: 'GET/POSTでもないリクエストです。' });
      break;
  }

 }

