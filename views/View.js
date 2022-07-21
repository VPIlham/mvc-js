class View {
    static help(){
        console.log(`Todo App Commands : `);
        console.log(`node index.js`);
        console.log(`node index.js help`);
        console.log(`node index.js show`);
        console.log(`node index.js add <task>`);
        console.log(`node index.js delete <id>`);
        console.log(`node index.js edit <id> <task>`);
        console.log(`node index.js changeStatus <id>`);
    }
    static show(todos){
        console.log('Tasks List : ');
        todos.forEach((todo) => {
            const {id, task, status} = todo
            if (status) {
                console.log(`${id}. [X] ${task}`);
            } else {
                console.log(`${id}. [ ] ${task}`);
            }
        });
    }
}
module.exports = View;