const yargs = require("yargs");
const notes = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.blue.inverse.bold("Success!");
// console.log(greenMsg);

// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("this worked");
// }

//Create add command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe:'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title, argv.body)
    console.log("Removing note");
  },
});

//Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "list new note",
  handler: () => {
    notes.listNotes()
    console.log("listing new note");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "read the note",
  builder: {
    title: {
describe: 'Note Title',
demandOption: true,
type: 'string'
    }
  },
  handler: (argv) => {
    notes.readNotes(argv.title)
    console.log("reading new note");
  },
});

yargs.parse();
