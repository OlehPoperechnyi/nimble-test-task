import Tracker from "../Tracker/Tracker";
import {connect} from "react-redux";
import {removeTracker, startTracker, stopTracker} from "../../redux/redux-store";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  max-height: 80vh;
  overflow-y: auto;
`;

const Trackers = ({trackers, ...props}) =>{
    return <Section>
        {((trackers !== undefined) && (trackers.length > 0))
        && trackers.map((v,i) => <Tracker tracker={v}
                                          index={i} key={v.startPoint.toString()}
                                          removeTracker={removeTracker}
                                          {...props}
                                          />)}
    </Section>
}

export default connect((state) => ({
    trackers: state.trackers,
}),{
    removeTracker,
    startTracker,
    stopTracker
})(Trackers);