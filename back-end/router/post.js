import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /posts");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("POST: /받아라 얍~");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /posts/:id");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;
