const Handler = (req, res) => {
  console.log("dfdfdfsdfsd");
  //응답해줄때 사용. 서버가 돌아가지 않고 응답뱉음
  //status code 참고
  if (req.method === "POST") {
    return res.status(200).json("처리 완");
  }
};

export default Handler;
