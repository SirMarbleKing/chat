const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (request, response) => {
    response.status(200).send("fuck you");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})