import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import { addTask } from '../features/taskSlice'
import React, { useState } from 'react';

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('To Do')
    }

    return (
        <form className='mb-4' onSubmit={handleSubmit}>
            <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add New Task</h2>
            <div className='mb-4'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Task Title' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ' />
            </div>
            <div className='mb-4'>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Task Description' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' rows="3"></textarea>
            </div>
            <div className='mb-4'>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'>
                    <option value="To Do">To Do</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
            <button type='submit' className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'>Add Task</button>
        </form>
    )
}

export default AddTask
