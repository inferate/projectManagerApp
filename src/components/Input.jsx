import React from 'react';
import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';
import { forwardRef } from 'react';

const Input = forwardRef(function ({ label, textarea, ...props }, ref) {
  const styleClasses =
    'w-full p-1 border-b-2 roundend-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} ref={ref} className={styleClasses}></textarea>
      ) : (
        <input {...props} ref={ref} className={styleClasses} />
      )}
    </p>
  );
});

export default Input;

export const NoProject = ({ onStartProject }) => {
  return (
    <div className="mt-24 text-cetner w-2/3">
      <img
        src={noProjectImage}
        alt="Empty Task"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or start a new one</p>
      <p className="mt-8">
        <Button onClick={onStartProject}>+ Create New Project</Button>
      </p>
    </div>
  );
};
