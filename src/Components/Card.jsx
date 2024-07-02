import React, { useState } from 'react';

const Card = ({ todoName, todoDis, id, deleteCard, status, changeStatus }) => {
    //State for todoName
    const [newTodoName, setNewTodoName] = useState(todoName);
    //State for todo description
    const [newTodoDis, setNewTodoDis] = useState(todoDis);
    //State for user edit button
    const [isEditing, setIsEditing] = useState(false);

    //function for card edit
    const editContent = () => {
        setIsEditing(true);
    };

    //function for update card status
    const updateChanges = (event, field) => {
        if (field === 'name') {
            setNewTodoName(event.target.value);
        } else {
            setNewTodoDis(event.target.value);
        }
    };

    //function to change changes
    const saveChanges = () => {
        setIsEditing(false);
    };

    //function to handle card status
    const handleChange = (event) => {
        changeStatus(id, event.target.value);
    };

    return (
        <div className="col-xl-4 col-md-6 d-flex justify-content-center mt-5">
            <div className="card-content">
                <p><span>Name:</span>
                    {isEditing ?
                        (<input className='update-input-box'
                            type="text"
                            value={newTodoName}
                            onChange={(e) => updateChanges(e, 'name')}
                            autoFocus
                        />) : (newTodoName)}
                </p>

                <p><span>Description:</span>{isEditing ?
                    (<input className='update-input-box'
                        type="text"
                        value={newTodoDis}
                        onChange={(e) => updateChanges(e, 'dis')}
                    />) : (newTodoDis)}
                </p>
                <p><span></span>Status:
                    <select name="status" id="status" value={status} onChange={handleChange}
                        className={status === 'completed' ? 'mx-2 completed' : 'mx-2 notCompleted'}>
                        <option value="notCompleted" className='btn-red'>Not Completed</option>
                        <option value="completed" className='btn-green'>Completed</option>
                    </select>

                    {isEditing ? <button
                        onClick={saveChanges}
                        className='btn btn-dark update-btn'>Update</button> : ''}
                </p>
                <div className="buttons">
                    <button className="btn btn-success btn-green"
                        onClick={editContent}>Edit</button>
                    <button onClick={() => deleteCard(id)} className="btn btn-danger btn-red">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;

