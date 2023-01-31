import { Todo } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  res.status(200).json([{ title: "taks 1" }, { title: "taks 2" }, { title: "taks 3" }]);
};