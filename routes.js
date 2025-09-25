const express = require('express');
const router = express.Router();

// Đường dẫn đến tính năng nhắn tin
router.get('/chat', (req, res) => {
  res.send('Chức năng nhắn tin sẽ ở đây.');
});

module.exports = router;