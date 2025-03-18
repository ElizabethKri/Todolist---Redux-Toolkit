import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {changeTodolistTitleAC, deleteTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import type {Todolist} from "@/app/App.tsx";
import styles from './TodolistTitle.module.css'

type Props = {
    todolist: Todolist
}

const TodolistTitle = ({todolist}: Props) => {

    const {id, title} = todolist

    const dispatch = useAppDispatch()

    const deleteTodolist = () => {
        const action = deleteTodolistAC({id})
        dispatch(action)
    }

    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleAC({id, title}))
    }
    return (
        <div className={styles.container}>
            <h3>
                <EditableSpan value={title} onChange={changeTodolistTitle} />
            </h3>
            <IconButton onClick={deleteTodolist}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default TodolistTitle;