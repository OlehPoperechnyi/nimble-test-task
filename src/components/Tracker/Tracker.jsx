import {useEffect, useState} from "react";
import styled from "styled-components";
import moment from "moment";

import {Box, Container, makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        width: '100%',
        minHeight: '60px',
        borderTop: 'solid 1px gray',

    },
    box: {
        minWidth: '80px',
    },
    iconButton: {
        margin: 0,
        padding: '0px',
        color: 'black',
        fontSize: 30,
    },
    removeButton: {
        color: 'red',
    },
}));
const activeStyle = {
    color: 'green',
    backgroundColor: 'lightyellow',
    opacity: 0.8
}
const Control = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TrackerName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;

const Tracker = ({tracker: {name, startPoint, value, trackerOn}, index, ...props}) => {
    const [time, setTime] = useState(value);
    const classes = useStyles();
    useEffect(() => {
        if (!trackerOn) return;
        const timer = setInterval(() => {
            setTime((Date.now() - startPoint) + value);
        }, 1000)
        return () => {
            clearInterval(timer)
        }

    }, [time, startPoint, value, trackerOn]);
    const start = () => {
        props.startTracker(index, Date.now());
    }
    const stop = () => {
        props.stopTracker(index, time);
    }
    return (
        <section>
            <Container className={classes.root} style={trackerOn ? activeStyle : {}}>
                <TrackerName>
                    {name}
                </TrackerName>
                <Box className={classes.box}>
                    <div>
                        {`${Math.floor(moment.duration(Number(time)).asHours())}
                        : ${moment(Number(time)).format("mm")}
                        : ${moment(Number(time)).format("ss")}`}
                    </div>
                    <Control>
                        {!trackerOn
                            ? <IconButton onClick={start}
                                          className={classes.iconButton}
                                          aria-label="Start tracker">
                                <PlayCircleOutlineIcon fontSize="inherit" color="inherit"/>
                            </IconButton>
                            : <IconButton onClick={stop}
                                          className={classes.iconButton}
                                          aria-label="Stop tracker">
                                <PauseCircleOutlineIcon fontSize="inherit" color="inherit"/>
                            </IconButton>}
                        <IconButton onClick={() => props.removeTracker(index)}
                                    className={classes.iconButton}
                                    aria-label="Delete tracker">
                            <RemoveIcon fontSize="inherit" className={classes.removeButton}/>
                        </IconButton>
                    </Control>
                </Box>
            </Container>
        </section>);
}

export default Tracker;