console.log("starting app.js...");
//npm modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
//local
const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];

console.log(`Command: ${command}`);
console.log("yargs", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  console.log(allNotes);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
  note => notes.logNote(note);
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note was not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "removed a note" : "nothing was removed";
  console.log(message);
} else {
  console.log("command not recognized");
}
