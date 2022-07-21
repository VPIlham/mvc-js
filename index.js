// Simple Apps

// COMMANDS
// node index.js
// node index.js help
// node index.js show
// node index.js add <task>
// node index.js delete <id>
// node index.js edit <id> <task>
// node index.js changeStatus <id>

//mengambil inputan
const command = process.argv[2];
const params = process.argv.slice(3);

const TodoController = require('./controllers/TodoController');

switch (command){
    case 'help':
        TodoController.help()
        break;
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break;
    case 'delete':
        TodoController.delete(params)
        break;
    case 'edit':
        TodoController.edit(params)
        break;
    case 'changeStatus':
        TodoController.changeStatus(params)
        break;
    case undefined:
        TodoController.message('Command cant be empty');
        break;
    default:
        TodoController.message('Command unknown');
        break;
}
