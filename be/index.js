const express = require("express");

const cors = require('cors')
const app = express();
const port = 8882;

// 中间件：跨域
app.use(cors());
// 中间件：解析 JSON 请求体
app.use(express.json());

// 定义一个简单的 GET 接口
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 定义一个简单的 POST 接口
app.post("/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "Data received successfully",
    data: receivedData,
  });
});

// 启动服务器，监听 8882 端口
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
