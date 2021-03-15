import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import {makeStyles} from "@material-ui/core";
import {useRef, useState} from "react";
import {connect} from "react-redux";
import {setNewTracker} from "../../redux/redux-store";
import moment from "moment";

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        border: 'solid 1px gray',
        borderRadius: 25,
    },

    input: {
        marginLeft: 20,
        flex: 1,
    },
    iconButton: {
        margin: 0,
        padding: '0px',
        color: 'green',
        fontSize: 50,
    },
}));

const CreateTracker = ({setNewTracker}) => {
    const nameRef = useRef(null);
    const [value, setValue] = useState('');
    const createTracker = (e) => {
        const startPoint = Date.now();
        const trackerName = (value === '') ? moment().format('MMMM Do YYYY, h:mm:ss a') : value;
        setNewTracker(trackerName, startPoint);
        setValue('');
        e.preventDefault();
    }
    const classes = useStyles();
    return (
        <Paper onSubmit={createTracker}
               className={classes.root}
               component="form">
            <InputBase className={classes.input}
                       placeholder="Input tracker name"
                       inputProps={{'aria-label': 'Input tracker name'}}
                       inputRef={nameRef}
                       value={value}
                       onChange={() => setValue(nameRef.current.value)}
            />
            <IconButton className={classes.iconButton}
                        onClick={createTracker}
                        aria-label="add tracker">
                <PlayCircleFilledOutlinedIcon fontSize="inherit" color="inherit"/>
            </IconButton>
        </Paper>
    );
}


export default connect(() => {
}, {setNewTracker})(CreateTracker);