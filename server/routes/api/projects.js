const express = require("express");
const projectsFile = __dirname + "/../../models/projects.json";
const projects = require(projectsFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const projectList = projects.map(project => {
    return {
      id: project.id,
      title: project.title,
      firstname: project.creatorfirstname,
      lastname: project.creatorlastname,
      creatorid: project.creatorid,
      collaborators: project.collaborators,
      description: project.description,
      keywords: project.keywords,
      private: project.private,
      city: project.city,
      province: project.province,
      country: project.country,
      uploads: project.uploads
    };
  });
  res.json(projectList);
});

router.get("/:id", (req, res) => {
  const found = projects.some(project => project.id === req.params.id);
  if (found) {
    res.json(projects.filter(project => project.id === req.params.id));
  } else {
    res.status(400).json({
      errorMessage: `Cannot find Project with ID:${req.params.id} not found`
    });
  }
});

router.post("/:id", (req, res) => {
  console.log(projects[0].uploads);
  const newMessage = {
    userid: "0",
    firstname: "Adrienne",
    message: req.body.message
  };
  projects[0].uploads.push(newMessage);
  helper.writeJSONFile(projectsFile, projects);
  res.json(projects);
});

router.post("/", (req, res) => {
  console.log(projects);
  const newProject = {
    id: projects.length,
    title: req.body.title,
    creatorfirstname: "Adrienne",
    creatorlastname: "Mountain",
    creatorid: "0",
    collaborators: req.body.collaborators,
    description: req.body.description,
    keywords: req.body.keywords,
    private: req.body.private,
    city: req.body.city,
    province: req.body.province,
    country: req.body.country,
    onlineoption: req.body.onlineoption,
    uploads: []
  };
  projects.push(newProject);
  helper.writeJSONFile(projectsFile, projects);
  res.json(projects);
});

module.exports = router;
