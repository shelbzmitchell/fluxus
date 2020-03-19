const express = require("express");
const projectsFile = __dirname + "/../../models/projects.json";
const projects = require(projectsFile);
// const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const projectList = projects.map(project => {
    return {
      id: project.id,
      title: project.title,
      firstname: project.creatorfirstname,
      lastname: project.creatorlastname,
      collaborators: project.collaborators,
      description: project.description,
      keywords: project.keywords,
      private: project.private,
      city: project.city,
      province: project.province,
      country: project.country
    };
  });
  res.json(projectList);
});

router.get("/:id", (req, res) => {
  const found = projects.some(project => project.id === req.params.id);
  if (found) {
    res.json(profiles.filter(project => project.id === req.params.id));
  } else {
    res.status(400).json({
      errorMessage: `Cannot find Project with ID:${req.params.id} not found`
    });
  }
});

module.exports = router;
