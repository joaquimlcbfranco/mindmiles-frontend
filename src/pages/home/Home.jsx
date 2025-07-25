import style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
	
	return (
		<div className={style.homeWrapper}>
      <h1>
				Welcome to <span>M</span>ind<span>M</span>iles
			</h1>
			<h2>
				A social media app where you can track your study activities and
				share them to the world
			</h2>
			<p>
				<Link to="login">Login</Link> to get started
			</p>
		</div>
	);
}
