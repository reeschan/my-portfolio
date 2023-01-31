import { CareerItem} from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      let mockCareers: CareerItem[] = [{ startDate: new Date(), endDate: new Date(), title:"", subtitle:"", description: 'FirstCareer' },
        { startDate: new Date(), endDate: new Date(), title:"", subtitle:"", description: 'SecondCareer' },
        {startDate: new Date(), endDate: new Date(), title:"", subtitle:"", description: 'thirdCareer' }]
      
      res.json(mockCareers);
      break;
    case 'POST':
      const { startDate, endDate, title, subtitle, description }: CareerItem = req.body
      res.json({ message: 'POSTリクエスト' });
      break;
    default:
      res.json({ message: 'GET/POSTでもないリクエストです。' });
      break;
  }
 }

