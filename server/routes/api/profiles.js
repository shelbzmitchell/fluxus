const express = require("express");
const profilesFile = __dirname + "/../../models/profiles.json";
const profiles = require(profilesFile);
const router = express.Router();

//get profile info from profiles.json

router.get("/", (req, res) => {
  const profileList = profiles.map(profile => {
    return {
      id: profile.id,
      firstname: profile.firstname,
      lastname: profile.lastname,
      profilephoto: profile.profilephoto,
      artphoto: profile.artphoto,
      website: profile.website,
      bio: profile.bio,
      city: profile.city,
      province: profile.province,
      country: profile.country,
      lookingtocollaborate: profile.lookingtocollaborate,
      medium: profile.medium,
      projects: profile.projects,
      personalart: profile.personalart
    };
  });
  res.json(profileList);
});

//get profile info according to id

router.get("/:id", (req, res) => {
  const found = profiles.some(profile => profile.id === req.params.id);
  if (found) {
    res.json(profiles.filter(profile => profile.id === req.params.id));
  } else {
    res.status(400).json({
      errorMessage: `Cannot find Profile with ID:${req.params.id} not found`
    });
  }
});

module.exports = router;
