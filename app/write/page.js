import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const Write = async () => {
  let session = await getServerSession(authOptions);

  if (session) {
    return (
      <div className="p-20">
        <h3>글작성</h3>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="제목" />
          <input name="content" placeholder="내용" />
          <button type="submit">button</button>
        </form>

        <hr />
        <form action="/api/list" method="GET">
          <button type="submit">button</button>
        </form>
      </div>
    );
  } else {
    return <p>로그인 하십셔</p>;
  }
};

export default Write;


