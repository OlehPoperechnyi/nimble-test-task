import style from './App.module.css';
import Header from "./components/Header/Header";
import CreateTracker from "./components/CreateTracker/CreateTracker";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <main className={style.App__mainContainer}>
          <CreateTracker />
      </main>
    </div>
  );
}

export default App;
