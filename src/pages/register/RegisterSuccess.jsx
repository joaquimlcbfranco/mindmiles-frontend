import style from "./RegisterSuccess.module.css";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className={style.content}>
			<div className={style.successWrapper}>
				<h1>You have successfully registered your account</h1>
				<p>
					<Link to="/login">Login</Link> to access MindMiles!
				</p>
			</div>
		</div>
	);
}
