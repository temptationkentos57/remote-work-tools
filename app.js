const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Xin chào, đây là dịch vụ Remote Work Tools!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});