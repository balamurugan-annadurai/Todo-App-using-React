import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import "./App.css";
import NewContext from './NewContext';

const App = () => {
    //State for cards
    const [cards, setCards] = useState([]);
    //State for filterStatus
    const [filterStatus, setFilterStatus] = useState('all');
    //State for msg display
    const [isMsgDisplay, setIsMsgDisplay] = useState(true);

    //function to set new Cards
    const addCard = (todoName, todoDis) => {
        setCards([...cards, { id: Date.now(), todoName, todoDis, status: 'notCompleted' }]);
    };

    //function to change card status when card status is updated
    const changeStatus = (id, newStatus) => {
        setCards(cards.map(card => card.id === id ? { ...card, status: newStatus } : card));
    };

    const updatEditedName = (id,newValue) => {
        setCards(cards.map(card => card.id === id ? { ...card, todoName: newValue } : card));
    }
    const updatEditedDiscription = (id,newValue) => {
        setCards(cards.map(card => card.id === id ? { ...card, todoDis: newValue } : card));
    }

    //function to delete card from cards
    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    //function to filter cards based on user input
    const filterCards = () => {
        return cards.filter(card => {
            if (filterStatus === 'all') {
                return true;
            } else if (filterStatus === 'notCompleted') {
                return card.status === 'notCompleted';
            } else {
                return card.status === 'completed';
            }
        });
    };

    return (
        <NewContext.Provider value={{updatEditedName,updatEditedDiscription}}>
            <div className="container">
                <Header addCard={addCard} isMsgDisplay={isMsgDisplay} setIsMsgDisplay={setIsMsgDisplay} />
                <Main
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    cards={filterCards()}
                    deleteCard={deleteCard}
                    changeStatus={changeStatus}
                    isMsgDisplay={isMsgDisplay}
                />
            </div>
        </NewContext.Provider>
    );
};

export default App;
