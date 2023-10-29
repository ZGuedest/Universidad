import{useEffect} from 'react'
import { getAllTasks } from '../api/tasks.api';

export function TasksList(){
    useEffect(()=>{
        async function loadTask(){
            const res = await getAllTasks()
            console.log(res)
        }
        loadTask()
    },[]);

    return <div>TasksList</div>;
    
}