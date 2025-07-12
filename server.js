require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(__dirname);
// __dirname is the directory name of the current module
// /Users/Jenwit/Desktop/CC15/Express.js/express04
// absolute path to the directory where the current file is located

// console.log(path.resolve());
// Output: "/Users/Jenwit/Desktop/CC15/Express.js/express04"
// path.resolve() returns the absolute path of the current working directory

// console.log(path.resolve("public"));
// Output: "/Users/Jenwit/Desktop/CC15/Express.js/express04/public"
// path.resolve("public") returns the absolute path to the "public" directory

// console.log(path.join(__dirname, "public"));
// Output: "/Users/Jenwit/Desktop/CC15/Express.js/express04/public"
// path.join(__dirname, "public") creates a path to the "public" directory relative
// to the current directory (__dirname is the directory name of the current module)
// __dirname is a global variable in Node.js that contains the absolute path to the directory
// where the current script is located
// path.join is used to create a path
// It joins the directory name with "public" to create a path to the public directory /Users/Jenwit/Desktop/CC15/Express.js/express04/public

// app.use(express.static(path.join(__dirname, "public")));
// Serve static files from the public directory
// This allows you to serve static files like images, CSS, and JavaScript from the public directory

// console.log(__filename);
// __filename is the file name of the current module
// /Users/Jenwit/Desktop/CC15/Express.js/express04/server.js
// absolute path to the current file

// Test different formats of express.static()
// On Chrome, you can access the static files at http://localhost:8080/static/index.html or http://localhost:8080/static/pug.svg or http://localhost:8080/static/cat.svg
// test 1
app.use("/static", express.static("public"));
// Serve static files from the "public" directory under the "/static" route
// test 2
app.use("/static", express.static(path.join(__dirname, "public")));
// test 3
app.use("/static", express.static(path.resolve("public")));
// For test 4 and test 5, this time without the "/static" route : On Chrome, you can access the static files at http://localhost:8080/index.html or http://localhost:8080/pug.svg or http://localhost:8080/cat.svg
// test 4
app.use(express.static("public"));
// test 5
app.use(express.static("./public"));
// ALL TESTS WORKED !

app.use("/user", userRoute);
// console.log(userRoute);

app.use("/todo", todoRoute);

// app.use((req, res) => {
//   res.status(404).json({ msg: "Path Not Found" });
// });

// same as above
app.use(notFoundMiddleware);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
