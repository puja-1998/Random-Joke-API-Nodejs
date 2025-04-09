const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Load jokes from JSON file
const jokesPath = path.join(__dirname, "jokes.json");
let jokes = [];

try {
  const data = fs.readFileSync(jokesPath, "utf8");
  jokes = JSON.parse(data);
} catch (err) {
  console.error("Error reading jokes.json:", err);
}

// Routes
app.get("/", (req, res) => {
  res.send(" Welcome to the Random Jokes API!");
});

app.get("/api/jokes", (req, res) => {
  res.json({ jokes });
});

app.get("/api/jokes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.get("/api/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= jokes.length) {
    return res.status(404).json({ error: "Joke not found" });
  }
  res.json({ joke: jokes[id] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
