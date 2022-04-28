import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [flag, setFlag] = useState(false);
	const [editText, setEditText] = useState([]);
	const [editArray, setditArray] = useState([]);
	const [items, setItems] = useState([]);

	const createTodos = () => {
		let todo = {};
		todo.id = uuidv4();
		todo.completed = false;
		todo.text = value;
		setTodos([...todos, todo]);
		setItems(todos);
		setValue("");

		console.log(todos, todo);
	};
	console.log(items);

	const deleteTodos = (id) => {
		const arr = todos.filter((todos) => todos.id !== id);
		setItems(arr);
	};

	const setCompleted = (id) => {
		const arr = items.map((todos) => {
			if (todos.id === id) {
				todos.completed = !todos.completed;
			}
			return todos;
		});
		setItems(arr);
	};

	const completedArray = () => {
		const arr = todos.filter((todo) => todo.completed === true);
		setItems(arr);
		console.log("completedArray");
	};

	const uncompletedArray = () => {
		const arr = todos.filter((todo) => todo.completed === false);
		setItems(arr);
		console.log("uncompletedArray");
	};

	const allItems = () => {
		setItems(todos);
		console.log("arr");
	};

	const editTodos = (id) => {
		setFlag(true);
		const arr = todos.find((todos) => todos.id === id);
		setEditText(arr.text);
		setditArray(arr);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		const arr = todos.map((todos) => {
			if (todos.id === editArray.id) {
				todos.text = editText;
			}
			return todos;
		});
		setItems(arr);
		setFlag(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createTodos();
	};

	useEffect(() => {
		setItems(todos);
	}, [todos]);

	return (
		<div className='todo-parent'>
			<div className='todo-child'>
				<h1>Todo List</h1>
				{!flag ? (
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
				) : (
					<form onSubmit={handleEdit}>
						<input
							name=''
							type='text'
							placeholder='enter a todo'
							value={editText}
							onChange={(e) => setEditText(e.target.value)}
						/>
						<button type='submit'>Submit</button>
					</form>
				)}
				<div className='todo-Container'>
					{items.map((todo) => {
						return (
							<div className='todo' key={todo.id}>
								<div className='todoItem'>
									<span onClick={() => setCompleted(todo.id)}></span>
									<p className={todo.completed ? "completed" : ""}>
										{todo.text}
									</p>
								</div>
								<div className='todoFuncs'>
									<i
										className='fa-solid fa-pen-to-square edit'
										onClick={() => editTodos(todo.id)}
									></i>
									<i
										className='fa-solid fa-trash-can delete'
										onClick={() => deleteTodos(todo.id)}
									></i>
								</div>
							</div>
						);
					})}
				</div>

				<div className='btnContainer'>
					<button className='btn-completed' onClick={completedArray}>
						Completed
					</button>
					<button className='btn-all' onClick={allItems}>
						All
					</button>
					<button className='btn-uncompleted' onClick={uncompletedArray}>
						Uncompleted
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
