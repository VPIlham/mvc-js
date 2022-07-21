const Todo = require('../models/Todo');
const View = require('../views/View')

class TodoController {
    static help(){
        View.help();
    }
    static show(){
        let todos = Todo.getTodos();
        View.show(todos);
    }
    static add(params){
        Todo.add(params);
    }
    static delete(params){
        Todo.delete(params);
    }
    static edit(params){
        Todo.edit(params);
    }
    static changeStatus(params){
        Todo.changeStatus(params);
    }
    static message(params){
        Todo.message(params);
    }
}

module.exports = TodoController;