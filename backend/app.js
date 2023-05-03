const express = require("express");
const app = express();

// app.use(express.json());


app.get('/', (req, res) => {
    // console.log("Starting................");
    res.status(200).json({
        success: true,
        message:"Created first api successfully"
    });
});

module.exports = app;