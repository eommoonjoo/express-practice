import express from "express";
const app = express();

// app.get("/sky/:id", (req, res, next) => {
//   // console.log(req.path);
//   // console.log(req.headers);
//   console.log(req.params);
//   // localhost:8080/sky/eommoonjoo
//   console.log(req.query);
//   // localhost:8080/sky/eommoonjoo/?keyword=bts
//   // res.send("hi");

//   // res.json({ name: "Ellie" });
//   // res.sendStatus(400);
//   res.setHeader("key", "value");
//   res.status(201).send("created");
// });

app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

//all 은 /api에서만 작동하는데, use같은 경우에는 /sky/asb/dfasd 이렇게 해도 작동함

app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    // next("route");
    // next(new Error("error"));
    res.send("Hello");
    // route로 하게 되면 first2 가 아니라 second로 바로 넘어감
  },
  (req, res, next) => {
    console.log("firs2");
    next();
  }
);

app.get("/", (req, rees, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("Not available");
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try, later!");
});
app.listen(8080);

//API reference
