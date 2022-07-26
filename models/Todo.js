const fs = require('fs');

class Todo {
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status;
    }

    static getTodos(){
        let todos = JSON.parse(fs.readFileSync('./data.json','utf8'));
        todos = todos.map(todo => {
            const {id, task, status} = todo
            return new Todo(id, task, status);
        });
        return todos;
    }

    static add(params){
        let todos = this.getTodos();
        const [task] = params;
        let id = todos[todos.length - 1].id + 1;

        todos.push(new Todo(id, task, false));
        this.save(todos);
        console.log(`"${task}" telah dibuat..`);
    }

    static edit(params){
        let todos = this.getTodos();
        let id = +params[0];
        let task = params[1];

        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
            } 
            return todo;
        });
        console.log(`"id : ${id}" telah diedit..`);
        this.save(todos);
    }

    static delete(params){
        let todos = this.getTodos();
        let id = +params[0];

        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);
        console.log(`id : "${id}" telah dihapus..`);
    }

    static changeStatus(params){
        let todos = this.getTodos();
        let id = +params[0]

        todos = todos.map(todo => {
            if (todo.id == id) {
                todo.status = !todo.status;
            }
            return todo;
        });
        this.save(todos);
        console.log(`id : "${id}" status telah diganti..`);
    }

    static save(todos){
        fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3));
    }
}

module.exports = Todo;