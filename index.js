const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "ApnaCollege",
        content: "A learning Platform"
    },

    {
        username: "Shradha khapra",
        content: "Is an Instructor"
    },

    {
        username: "Anamul",
        content: "Is an learner of this platform"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

//add new form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.listen(port, () => {
    console.log(`App is listening port ${port}`);
});