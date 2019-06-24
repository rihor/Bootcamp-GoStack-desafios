const express = require("express");

const routes = new express.Router();
const projects = [];

function checkIfProjectExists(req, res, next) {
  const index = projects.findIndex(project => project.id == req.params.id);
  if (index < 0 || index == undefined) {
    return res.status(400).json({ message: "This project id doesn't exist." });
  }
  req.body.index = index;
  return next();
}

routes.get("/projects", (req, res) => {
  return res.json(projects);
});

routes.post("/projects", (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});

routes.put("/projects/:id", checkIfProjectExists, (req, res) => {
  const { title, index } = req.body;

  projects[index] = { ...projects[index], title };

  res.json(projects);
});

routes.delete("/projects/:id", checkIfProjectExists, (req, res) => {
  const { index } = req.body;

  // apartir do index, remove 1 elemento
  projects.splice(index, 1);

  res.json(projects);
});

routes.post("/projects/:id/tasks", checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { index } = req.body;

  projects[index] = {
    ...projects[index],
    tasks: [...projects[index].tasks, req.body.title]
  };

  return res.json(projects);
});

module.exports = routes;
