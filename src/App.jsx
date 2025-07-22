import style from "./App.module.css";
import Header from "./components/header/Header.jsx";
import Activity from "./components/activity/Activity.jsx";
import Footer from "./components/footer/Footer.jsx";

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
			<Footer />
		</>
	);
}

export default App;
