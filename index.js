import express from "express"
import mongoose  from "mongoose";
import Tasks from "./models/tasksModel.js";
const app = express()
app.use(express.json())
const port = 6666;

app.get('/', async(req, res)=>{
    const tasks = await Tasks.find()
    res.json(tasks)
})

app.post('/',async(req, res)=>{
    const { title , date, isFinished} = req.body;

    const task = new Tasks({
        title, date, isFinished
    })
    const newTask = await task.save()

    res.json(newTask)
})

app.put('/:id',async(req, res)=>{
    const { title , date, finished} = req.body;

    const task = await Tasks.findById(req.params.id)

    if(task){
        task.title
        task.date
        task.finished
        const updatedTask = await task.save()

        res.json(updatedTask)
    }
})

app.delete('/:id',async(req, res)=>{
    const task = await Tasks.findByIdAndDelete(req.params.id)
    res.json({message: "Task deleted!"})
})

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})
mongoose.connect('mongodb+srv://feysalbubshe:feysalbubshe@cluster0.ajgfx9f.mongodb.net/Tasks?retryWrites=true&w=majority').then(()=>{
    console.log(`Connected to Datebase`)
})