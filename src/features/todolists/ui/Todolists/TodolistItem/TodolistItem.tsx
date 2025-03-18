import type {Todolist} from '../../../../../app/App.tsx'
import {CreateItemForm} from '../../../../../common/components/CreateItemForm/CreateItemForm.tsx'
import {createTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import TodolistTitle from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle.tsx";
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Tasks/Tasks.tsx";
import FilterButton from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButton.tsx";

type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {

    const dispatch = useAppDispatch ()


    const createTask = (title: string) => {
        dispatch (createTaskAC (todolist.id, title))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTask}/>
            <Tasks todolist={todolist}/>
            <FilterButton todolist={todolist}/>
        </div>
    )
}
