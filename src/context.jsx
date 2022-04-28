import React, { useState, useEffect, useContext } from "react";

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const createTodos = (data) => {
		setTodos([...todos, data]);
	};

	return (
		<TodoContext.Provider value={{ todos, createTodos }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(TodoContext);
};

export { TodoContext, TodoProvider };
