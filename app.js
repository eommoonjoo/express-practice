import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json()); // request body에서 json으로 받기위해서 사용하는 미들웨어

app.get("/file1", (req, res) => {
  // try {
  //   const data = fs.readFileSync("/file.txt");
  // } catch (error) {
  //   res.status(404).send("404 File not found");
  // }

  //try catch문은 동기일 때만 에러처리가 가능하고, 비동기일 때는 아무리 해도 처리가 되지 않는다.

  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    }
  }); //비동기로 처리할 때는 에러를 자체적으로 처리를 해줘야 한다. 왜냐하면, 함수를 실행한것은 맞고, 그게 언제 올지 모르는 상태이니, error를 던져야 할 지, 말 지를 모르는거지...
});

app.get("/file2", (req, res, next) => {
  fsAsync
    .readFile("/file.txt")
    .catch((error) => res.status(404).send("File not found"));
});

app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file.txt");
  } catch (error) {
    res.status(404).send("File not found -3 ");
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "관리자에게 문의해주세요" });
});

app.listen(8080);

//API reference
