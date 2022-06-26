import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import cors from "cors";

const app = express();

app.use(express.json()); //REST API, => Body
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

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.listen(8080);
