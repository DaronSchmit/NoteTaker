// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const db = require("../db/db.json");
const express = require("express");
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  app.get("/api/notes", function(req, res) {
    console.log("returns notes as JSON from db.json");
    console.log(db);
    res.json(db);
  });

  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../')))



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  app.post("/api/notes", function(req, res) {
    db.push(req.body);
    res.json(true);
  });

  // DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  app.delete("/api/notes/:id", function(req, res) {

  });

}