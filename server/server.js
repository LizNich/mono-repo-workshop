import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/message", function (request, response) {
  response.json("wow nice project again");
});

app.listen(8080, function () {
  console.log("Running on PORT 8080");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
