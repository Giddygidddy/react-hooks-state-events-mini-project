import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const TASKS = [
  { text: "Buy rice", category: "Food" },
  { text: "Save a tenner", category: "Money" },
  { text: "Build a todo app", category: "Code" },
  { text: "Build todo API", category: "Code" },
  { text: "Get an ISA", category: "Money" },
  { text: "Cook rice", category: "Food" },
  { text: "Tidy house", category: "Misc" }
];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter(task => 
    selectedCategory === "All" || task.category === selectedCategory
  );

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
