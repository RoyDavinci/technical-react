import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Home = () => {
	const [value, setValue] = useState("");

	const { createTodos, todos } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
		createTodos(value);
		console.log(todos);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name=''
					type='text'
					placeholder='enter a todo'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Home;
