import { AuthItem } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { password }: AuthItem = req.body
      console.log(password)
      if (password === process.env.AUTH_PASSWORD) {
        res.json({ message: 'POSTリクエスト' });
        break; 
      }
    default:
      res.json({ message: 'POSTでないリクエストです。' });
      break;
  }
 }

