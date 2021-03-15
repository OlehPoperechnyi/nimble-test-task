import Header from "./components/Header/Header";
import CreateTracker from "./components/CreateTracker/CreateTracker";
import styled from "styled-components";
import Trackers from "./components/Trackers/Trackers";

const AppContainer = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    gap: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainContent = styled.main`
  width: 90%;
  @media  (min-width: 560px) {
    width: 560px;
  }
`;


function App() {

  return (
    <AppContainer>
      <Header />
      <MainContent>
          <CreateTracker />
          <Trackers />
      </MainContent>
    </AppContainer>
  );
}

export default App;
