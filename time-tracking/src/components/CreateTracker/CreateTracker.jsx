import style from "./CreateTracker.module.css"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';

const CreateTracker = () => {
    return (
        <Paper component="form" className={style.createTracker}>
            <InputBase
                className={style.createTracker__input}
                placeholder="Input tracker name"
                inputProps={{ 'aria-label': 'Input tracker name' }}
            />
            <IconButton className={style.createTracker__iconButton}
                        color="primary"
                        aria-label="add tracker">
                    <PlayCircleFilledOutlinedIcon fontSize="inherit" color="inherit"/>
            </IconButton>
        </Paper>);
}

export default CreateTracker;