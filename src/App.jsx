import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Activity from "./components/activity/Activity.jsx";

function App() {
	return (
		<>
			<section id="main">
				<Header />
				<Activity />
			</section>
		</>
	);
}

export default App;
