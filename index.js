const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const all_chef_details = require("./data/all_chef_details.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef Corner is running");
});

app.get("/all_chef_details", (req, res) => {
  res.send(all_chef_details);
});

app.get("/chef_details/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    const r = all_chef_details.find((chef) => chef.id == id);
    console.log(r)
    if (!r) return res.status(404).send("Details not found");
    return res.json(r);
  }
  return res.status(404).send("id not valid");
});

app.listen(port, () => {
  console.log(`Chef Corner is running on port ${port}`);
});
