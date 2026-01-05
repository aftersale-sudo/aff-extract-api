const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/extract-aff", (req, res) => {
  const text = req.body.text || "";

  const words = text.split(" ");

  const affCode = words.find(word =>
    word.toUpperCase().includes("AFF")
  );

  res.json({
    code: affCode || ""
  });
});

app.get("/", (req, res) => {
  res.send("AFF Extract API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
