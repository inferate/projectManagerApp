import React from 'react';
import Tasks from './Tasks.jsx';

function SelectedProject({ project, onDelete, onAdd, onDeleteTask, tasks }) {
  const { title, descriptionRef, dueDateRef } = project;

  const formatedDate = new Date(dueDateRef).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  console.log(project);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{descriptionRef}</p>
      </header>
      <Tasks onAdd={onAdd} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}

export default SelectedProject;
