import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

// export const getAllTasks = () =>{
//     return taskApi.get('/')
// }

// export const createTask = (task) =>{
//     return taskApi.post('/',task)
// }

 //forma mas brave de escribir lo mismo q arriba 
 
export const getAllTasks = () =>  taskApi.get('/')
export const createTask = (task) => taskApi.post('/',task)
