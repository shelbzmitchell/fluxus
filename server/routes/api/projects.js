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

// router.put("/:id", (req, res, next) => {
//   // Book.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
//   //   if (err) return next(err);
//   //   res.json(post);
//   // });
// });

// app.put('/:id', function (req, res) {
//     var  = req.company;
//     company = _.extend(company, req.body);
//     company.save(function(err) {
//     if (err) {
//         return res.send('/company', {
//             errors: err.errors,
//             company: company
//         });
//     } else {
//         res.jsonp(company);
//     }
// });

// : req.body.imageUrl,

// router.patch("/:id", (req, res) => {
//   res.send("res.send");
//   const found = projects.some(project => project.id === req.params.id);
//   console.log(found);
//   if (found) {
//     projects.forEach(project => {
//       if (project.id === req.params.id) {
//         console.log(project.uploads);
//         const message = {
//           message: "This is a new message"
//         };
//         // project.uploads[0].messagenum = "4";
//         // projects.uploads[0].message = req.body.message
//         //         ? req.body.message
//         //         : project.message;
//         //       // book.imageUrl = req.body.imageUrl ? req.body.imageUrl : book.imageUrl;
//       }
//     });
//     projects.uploads.push(message);
//     helper.writeJSONFile(projectsFile, projects);
//     // res.json({ msg: "Book Updated", books: books });
//   } else {
//     res.status(404);
//   }
// });

router.post("/:id", (req, res) => {
  console.log(projects[0].uploads);
  const newMessage = {
    message: "this is a message"
  };
  // if (!newBook.title || !newBook.description || !newBook.imageUrl) {
  //   return res.status(400).json({
  //     errorMessage:
  //       "Please provide title, description, and imageUrl for the book"
  //   });
  // }
  projects[0].uploads.push(newMessage);
  helper.writeJSONFile(projectsFile, projects);
  res.json(projects);
});

/**
 *  update book with :id
 */

// /**
//  * Delete Book
//  */
// router.delete("/:id", (req, res) => {
//   const found = books.some(book => book.id === req.params.id);
//   if (found) {
//     const booksAfterDeletion = books.filter(book => book.id !== req.params.id);
//     helper.writeJSONFile(booksFile, booksAfterDeletion);
//     res.json({
//       msg: `Book with ID: ${req.params.id} Deleted`,
//       books: booksAfterDeletion
//     });
//   } else {
//     res
//       .status(404)
//       .json({ errorMessage: `Book with ID: ${req.params.id} not found` });
//   }
// });

module.exports = router;
