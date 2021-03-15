import {createStore} from "redux";

const SET_NEW_TRACKER = 'SET_NEW_TRACKER';
const REMOVE_TRACKER = 'REMOVE_TRACKER';
const START_TRACKER = 'START_TRACKER';
const STOP_TRACKER = 'STOP_TRACKER';

let initialState =
    {
        trackers: []
    };
if (localStorage.getItem('trackersState') !== null) {
    initialState = {...JSON.parse(localStorage.getItem('trackersState'))}
}
export const setNewTracker = (name, startPoint) => ({
    type: SET_NEW_TRACKER,
    name,
    startPoint
});
export const startTracker = (index, newStartPoint) => ({
    type: START_TRACKER,
    index,
    newStartPoint
});
export const stopTracker = (index, value) => ({
    type: STOP_TRACKER,
    index,
    value
});
export const removeTracker = (index = 0) => ({
    type: REMOVE_TRACKER,
    index
});

const trackersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NEW_TRACKER: {
            const stateCopy = {
                ...state,
                trackers: [...state.trackers, {
                    name: action.name,
                    startPoint: action.startPoint,
                    value: 0,
                    trackerOn: true
                }]
            }
            localStorage.setItem('trackersState', JSON.stringify(stateCopy));
            return stateCopy;
        }
        case STOP_TRACKER: {
            let trackers = [...state.trackers];
            trackers[action.index] = {
                ...trackers[action.index],
                value: action.value,
                trackerOn: false
            }
            const stateCopy = {
                ...state,
                trackers: trackers,
            }
            localStorage.setItem('trackersState', JSON.stringify(stateCopy));
            return stateCopy;
        }
        case START_TRACKER: {
            let trackers = [...state.trackers];
            trackers[action.index] = {
                ...trackers[action.index],
                startPoint: action.newStartPoint,
                trackerOn: true
            }
            const stateCopy = {
                ...state,
                trackers: trackers,
            }
            localStorage.setItem('trackersState', JSON.stringify(stateCopy));
            return stateCopy;
        }
        case REMOVE_TRACKER: {
            let trackers = [...state.trackers];
            trackers.splice(action.index, 1);
            const stateCopy = {
                ...state,
                trackers: trackers,
            }
            localStorage.setItem('trackersState', JSON.stringify(stateCopy));
            return stateCopy;
        }
        default:
            return state;
    }
};

const store = createStore(trackersReducer);

export default store;
