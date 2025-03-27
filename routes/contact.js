const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message." });
  }
});

// GET all messages
router.get("/", async (req, res) => {
    try {
      const messages = await Message.find().sort({ createdAt: -1 })
      res.status(200).json(messages)
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages." })
    }
  })
  

module.exports = router;
