import style from "./App.module.css";
import Header from "./components/header/Header.jsx";
import Activity from "./components/activity/Activity.jsx";

function App() {
	return (
		<>
				<Header />
        <div className={style.content}>
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          
        </div>
		</>
	);
}

export default App;
