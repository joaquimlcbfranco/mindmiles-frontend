import { useState } from "react";
import style from "./RegisterSuccess.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
	return (
		<div className={style.content}>
			<div className={style.successWrapper}>
				<h1>You have successfully registered your account</h1>
				<p>
					<a href="">Login</a> to access MindMiles!
				</p>
			</div>
		</div>
	);
}
