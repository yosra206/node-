const notes = require('./note')
console.log(notes)
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add data',
    builder: {
        ID: {
            describe: ' ID of student',
            type: 'number',
            demandOption: true
        },
        fName: {
            describe: ' first name of student',
            type: "string",
            demandOption: true
        },
        degrees: {
            describe: ' deg of student',
            type: "array",
            demandOption: true
        },
        Comment: {
            describe: ' com of student',
            type: "string",
        },
    },
    handler: (x) => {
        notes.add(x.ID, x.fName, x.degrees, x.Comment)
    }
})

yargs.command({
    command: "delete",
    describe: 'Delete note',
    builder: {
        ID: {
            describe: ' ID of student',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        console.log('Delete note')
    }
})

yargs.command({
    command: "read",
    describe: 'Read note',
    builder: {
        ID: {
            describe: ' ID of student',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => {
        console.log('Read note')
    }
})


yargs.command({
    command: 'list',
    describe: 'List note',
    handler: () => {
        console.log('List note')
    }
})

console.log(yargs.argv)