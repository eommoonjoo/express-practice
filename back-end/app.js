import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";

const app = express();

app.use(express.json()); //REST API, => Body
app.use(cookieParser()); //Cookie를 확인할 때, 필요한 미들웨어
app.use(morgan(`combined`)); // log를 확인할 때, 필요한 미들웨어
app.use(helmet());
app.use(cors());
app.use("/tweets", tweetsRouter);
app.use(express.urlencoded({ extended: false })); // HTML FORM =>BODY
app.use(express.static("public"));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPITONS, GET, POST, PUT, DELETE"
//   );
//   next();
// });
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080);
