import { connectDB } from "@/util/database";

export default async function Home() {
  //DB입출력코드는 server component 안에서만 쓰기
  const db = (await connectDB).db("forum");
  //post 컬렉션의 데이터를 모두 가져와서 array로 변환
  let result = await db.collection("post").find().toArray();

  console.log(result);

  return <div>hi</div>;
}
