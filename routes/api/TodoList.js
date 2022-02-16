//import package
const { Router } = require('express')

//import config db file
const config = require('../../config/config')

//router setup
const router = Router()

//Get all todo list route
router.get('/', async (req, res) =>{
    try {
        const allTodos = await config.query("SELECT * FROM todo");
        res.json(allTodos.rows)
    } catch (error) {
        console.log(error.message)
    }
})
//Create todo list route
router.post('/create', async (req, res) =>{
    try {
        const { description } = req.body
        const newTodo = await config.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})
//Get particular todo list route
router.get('/:id', async (req, res) =>{
    const { id } = req.params
    try {
        const todo = await config.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
        res.json(todo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})
//Update todo list route
router.put('/:id', async (req, res) =>{
    const { id } = req.params
    const {description} = req.body
    try {
        const updateTodo = await config.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
        const updatedtodo = await config.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
        res.json(updatedtodo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})
//Delete todo list route
router.delete('/:id', async (req, res) =>{
    const { id } = req.params
    try {
        const deleteTodo = await config.query("DELETE FROM todo WHERE todo_id=$1", [id]);
        res.json("Todo delete")
    } catch (error) {
        console.log(error.message)
    }
})

//export
module.exports = router