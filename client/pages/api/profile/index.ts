import { ProfileItem} from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      let mockDescription: ProfileItem = { description: "1994年12月8日生まれ。\n 千葉県船橋市にて生まれ、その後は同県我孫子市で育つ。\nとにかく頑張ればどうにかなるをモットーとしている。" }
      res.json(mockDescription);
      break;
    case 'POST':
      const { description }: ProfileItem= req.body
      res.json({ message: 'POSTリクエスト' });
      break;
    default:
      res.json({ message: 'GET/POSTでもないリクエストです。' });
      break;
  }
 }

