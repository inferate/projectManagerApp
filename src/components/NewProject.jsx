import React, { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

const NewProject = ({ onAdd, onCancel }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const entereDiscription = descriptionRef.current.value;
    const entereDueDate = dueDateRef.current.value;
    if (
      enteredTitle.trim() === '' ||
      entereDiscription.trim() === '' ||
      entereDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      descriptionRef: entereDiscription,
      dueDateRef: entereDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ,looks like you forgot to add a value{' '}
        </p>
        <p className="text-stone-600 mb-4">
          Please provide a value for every field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" type="text" />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input label="Due Date" type="date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
