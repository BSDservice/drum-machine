import {Button, Grid} from '@mui/material';
import {useEffect} from 'react';

function AudioButton(props) {

    let audio = new Audio(props.source)
    async function play(){
        audio.play()
    }

    return (
        <Grid item container xs={4} justifyContent="center">
            <Button onClick={play} id={props.id}>{props.label}</Button>
        </Grid>
    )
}

export {AudioButton}