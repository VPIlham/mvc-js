const Todo = require('../models/Todo');
const View = require('../views/View')

class TodoController {
    static help(){
        View.help();
    }
}

module.exports = TodoController;