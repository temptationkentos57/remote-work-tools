const express = require('express');
const router = express.Router();

// Đường dẫn đến tính năng nhắn tin
router.get('/chat', (req, res) => {
  res.send('Chức năng nhắn tin đang được phát triển. Chúng tôi cảm ơn sự kiên nhẫn của bạn!');
});

module.exports = router;