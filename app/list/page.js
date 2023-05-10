import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const List = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  let session = await getServerSession(authOptions);

  return <ListItem result={result} session={session} />;
};

export default List;
