const express = require("express");
const app = express();

// Route to return a JSON file
app.get("/", (req, res) => {
    const data = {
        message: "Hi",
    };
    res.json(data);
});

// Start the server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
