const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all files in this folder
app.use(express.static(__dirname));

// Main pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complete-profile.html", (req, res) => {
  res.sendFile(path.join(__dirname, "complete-profile.html"));
});

app.get("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.get("/room.html", (req, res) => {
  res.sendFile(path.join(__dirname, "room.html"));
});

app.get("/chat.html", (req, res) => {
  res.sendFile(path.join(__dirname, "chat.html"));
});

app.get("/admin.html", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});