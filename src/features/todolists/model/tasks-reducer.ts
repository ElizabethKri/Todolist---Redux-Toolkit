import type {TasksState} from '@/app/App.tsx'
import {
  createTodolistAC,
  deleteTodolistAC,
} from './todolists-reducer.ts'
import {createAction, createReducer, current, nanoid} from "@reduxjs/toolkit";

export const deleteTaskAC = createAction<{todolistId: string, taskId: string}>('tasks/deleteTask')
export const createTaskAC = createAction('tasks/createTask', (todolistId: string, title: string) => {
  return {payload: {todolistId, title, id: nanoid()}}
})
export const changeTaskStatusAC = createAction<{todolistId: string, taskId: string, isDone: boolean}>('tasks/changeTaskStatus')
export const changeTaskTitleAC = createAction<{todolistId: string, taskId: string, title: string}>('tasks/changeTaskTitle')

const initialState: TasksState = {} as TasksState

export const tasksReducer = createReducer (initialState, builder => {
  builder
      .addCase (deleteTodolistAC, (state, action) => {
        delete state[action.payload.id]
      })
      .addCase (createTodolistAC, (state, action) => {
          state[action.payload.id] = []
          console.log(current(state))
      })
      .addCase(deleteTaskAC, (state, action) => {
        const indexTask = state[action.payload.todolistId].findIndex(tasks => tasks.id === action.payload.taskId)
        if(indexTask !== -1){
          state[action.payload.todolistId].splice(indexTask, 1)
        }
      })
      .addCase(createTaskAC, (state, action) => {
        console.log(state[action.payload.todolistId], action.payload.todolistId, action)
          state[action.payload.todolistId].unshift({title: action.payload.title, id: action.payload.id , isDone: false})
          console.log(current(state))
      })
      .addCase(changeTaskStatusAC, (state, action) => {
        const task = state[action.payload.todolistId].find(tasks => tasks.id === action.payload.taskId)
        if(task){
          task.isDone = action.payload.isDone
        }
      })
      .addCase(changeTaskTitleAC, (state, action) => {
        const taskTitle = state[action.payload.todolistId].find(tasks => tasks.id === action.payload.taskId)
        if(taskTitle){
          taskTitle.title = action.payload.title
        }
      })

})







