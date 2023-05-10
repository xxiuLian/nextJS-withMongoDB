import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (req, res) => {
  console.log(JSON.parse(req.body));
  req.body = JSON.parse(req.body);
  let joa = {
    userId: new ObjectId(req.body.userId),
    boardId: new ObjectId(req.body.boardId),
  };
  const db = (await connectDB).db("forum");
  let result = await db.collection("joa").insertOne(joa);

  //조아요 수
  let count = await db
    .collection("joa")
    .count({ boardId: new ObjectId(req.body.boardId) });
  console.log(count);
  res.status(200).json(count);
};
export default handler;
