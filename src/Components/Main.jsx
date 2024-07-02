import React from 'react';
import Card from './Card';
import Msg from './Msg';

const Main = ({ cards, deleteCard, filterStatus, setFilterStatus, changeStatus,isMsgDisplay }) => {
    //function to handle filter status
    const changeFilter = (event) => {
        setFilterStatus(event.target.value);
    };

    return (
        <div className="main mt-5">
            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-8 d-flex flex-column flex-sm-row align-content-center flex-wrap justify-content-between">
                    <h2 className='d-flex justify-content-center'>My Todos</h2>
                    <div className="status-filter mt-3 mt-sm-0">
                        <h2>Status Filter:</h2>
                        <select onChange={changeFilter}
                            name="statusFilter"
                            id=""
                            className={filterStatus === 'completed' ? 'mx-2 completed' : 'mx-2 notCompleted'}>
                            <option value="all" className='bg-primary'>All</option>
                            <option value="completed" className='btn-green'>Completed</option>
                            <option value="notCompleted">Not Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    isMsgDisplay ? <Msg /> :
                    cards.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            todoName={card.todoName}
                            todoDis={card.todoDis}
                            status={card.status}
                            deleteCard={deleteCard}
                            changeStatus={changeStatus}
                        />
                    ))
               }
            </div>
        </div>
    );
};

export default Main;
