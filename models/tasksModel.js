import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        require:[true,'Title is required']
    },
    date:{
        type:String,
        require:[true,'Date is required']
    },
    isFinished:{
        type:Boolean,
        default:false,
    }
})

const Tasks = mongoose.model("tasks", taskSchema)
export default Tasks