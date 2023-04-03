import React from "react";
import { useForm } from "react-hook-form";
import "../styles/authForm.css";
import { UserRegistartionData } from "../types";

type Props = {
	onSubmit: (data: UserRegistartionData) => void;
};

const Signup = (props: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		props.onSubmit({ name: data.name, password: data.password });
	};

	return (
		<div>
			<h1 className="home__header" style={{ fontSize: "60px" }}>
				SIGN UP
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="auth-form">
				<label>Name</label>
				<input
					className="input"
					{...register("name", {
						required: true,
						maxLength: 30,
						minLength: 4,
					})}
				/>
				{errors.name && <span className="error">Invalid name</span>}

				<label>Password</label>
				<input
					className="input"
					type="password"
					{...register("password", {
						required: true,
						maxLength: 30,
						minLength: 4,
					})}
				/>
				{errors.password && (
					<span className="error">Invalid password</span>
				)}

				<input
					className="button-primary"
					type="submit"
					placeholder="Submit"
				/>
			</form>
		</div>
	);
};

export default Signup;
