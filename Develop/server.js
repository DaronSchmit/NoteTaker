// DEPENDENCIES

const express = require("express");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

//Sets initial port to 8080 or whatever the environment wants. Useful for Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//find static files in public because that's a thing that we need to do 
app.use(express.static(path.join(__dirname, '../public')));

//Route paths 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Port listener
app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});
