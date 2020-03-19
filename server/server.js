const express = require("express");
const app = express();
app.use(express.json());

const profileRoutes = require("./routes/api/profiles");
app.use("/api/profiles", profileRoutes);

const projectRoutes = require("./routes/api/projects");
app.use("/api/projects", projectRoutes);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
