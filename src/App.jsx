import style from "./App.module.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div className={style.appContainer}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
