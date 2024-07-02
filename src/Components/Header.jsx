import React, { useRef, useState } from 'react';

const Header = ({ addCard,isMsgDisplay,setIsMsgDisplay }) => {
    const todoNameRef = useRef(null);
    const todoDesRef = useRef(null);

    //function to handle click
    const handleClick = () => {
        const todoName = todoNameRef.current.value;
        const todoDis = todoDesRef.current.value;
        addCard(todoName, todoDis);
        todoNameRef.current.value = "";
        todoDesRef.current.value = "";
        setIsMsgDisplay(false);
    };

    return (
        <header>
            <div className="row justify-content-center">
                <div className="mt-5 col-xl-12">
                    <h1 className='text-center'>My Todo</h1>
                </div>
                <div className="user-input-container row ">
                    <div className="col-12 col-lg-8 mt-3 col-xl-4 custom">
                        <input className='input p-2' id='todoName' type="text" placeholder='Todo Name' ref={todoNameRef} />
                    </div>
                    <div className="col-12 col-lg-8 mt-3  col-xl-4 custom">
                        <input className='input p-2' type="text" placeholder='Todo Description' ref={todoDesRef} />
                    </div>
                    <div className="col-10 col-lg-8 mt-3  col-xl-2 custom">
                        <button onClick={handleClick} className='btn btn-success btn-green'>Add Todo</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
