import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import {CreateItemForm} from "@/common/components/CreateItemForm/CreateItemForm.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {createTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import Todolists from "@/features/todolists/ui/Todolists/Todolists.tsx";

const Main = () => {


    const dispatch = useAppDispatch()



    const createTodolist = (title: string) => {
        const action = createTodolistAC(title)
        dispatch(action)
    }


    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{mb: '30px'}}>
                <CreateItemForm onCreateItem={createTodolist}/>
            </Grid>
            <Grid container spacing={4}>
                <Todolists/>
            </Grid>
        </Container>
    );
};

export default Main;