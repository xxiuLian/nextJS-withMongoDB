"use client";

import Link from "next/link";

const ListItem = (props) => {
  console.log(props.session);
  console.log(props.result[3]);

  if (props.session) {
    return (
      <div className="list-bg">
        {props.result.map((data, i) => (
          <div className="list-item" key={i}>
            <Link href={`/detail/${props.result[i]._id}`}>
              <h4>{props.result[i].title}</h4>
            </Link>
            {props.session.user.email == props.result[i].author ? (
              <Link href={`/edit/${props.result[i]._id}`}>수정</Link>
            ) : null}

            {props.session.user.email == props.result[i].author ? (
              <span
                onClick={(e) => {
                  //ajax
                  fetch(`/api/post/delete`, {
                    method: "POST",
                    body: JSON.stringify(props.result[i]),
                  })
                    .then((r) => {
                      r.json();
                    })
                    .then(() => {
                      //성공시 실행할코드
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 1000);
                    })
                    .catch((error) => {
                      //인터넷문제 등으로 실패시 실행할코드
                      console.log(error);
                    });
                }}
              >
                삭제
              </span>
            ) : null}
            <p>4월 19일</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>로그인 후 이용 plz</p>;
  }
};

export default ListItem;
