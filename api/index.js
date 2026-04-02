const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("../routes/contact");

const app = express();

app.use(cors({
  origin: 'https://zakaria-elbidali.vercel.app',
}));
app.use(express.json());

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
