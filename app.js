const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Xin chào, chào mừng bạn đến với dịch vụ Remote Work Tools! (Hello, welcome to the Remote Work Tools service!)');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy trên http://localhost:${PORT}`);
});