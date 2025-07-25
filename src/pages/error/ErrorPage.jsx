import style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage({ message = "" }) {
	return (
		<div className={style.errorWrapper}>
			<h1>Sorry! There was an error handling your request - ({message})</h1>
      <p>Back to <Link to="/">homepage</Link></p>
		</div>
	);
}
