import React from 'react';

import './bottomsection.css'

const BottomSection = ({ currentList, orderedList, moveItems, handleDelete, handleCurrentListDelete }) => {

    //States
    const [status, setStatus] = React.useState(false);
    const [outOfStock, setOutOfStock] = React.useState({})

    //Setting status  for setStatus
    const handleClick = () => {
        setStatus(prev => !prev)
    }



    return (
        <>
            <div>
                <h2
                    className="my-3 text-info"
                >Bottom Section</h2>

                {/*Change button text according to which list is visible on UI. (Show orderlist/Show current list etc) */}
                <button
                    onClick={handleClick}
                    className="btn btn-primary my-2"

                >
                    {status ? "Show The Current List" : "Show The Ordered List"}
                </button>

                {/* Mapping through the currentList and orderlist as per the user demand */}
                <div>
                    {status ? currentList.map((e) => (
                        <div key={e.id}>
                            <div className={outOfStock[e.id] ? "done" : "notDone"}>
                                Item Name : {e.name} {" "}
                                <button
                                    className="btn btn-warning m-1"
                                    onClick={() => {
                                        setOutOfStock(prev => (
                                            {
                                                ...prev, [e.id]: true
                                            }
                                        ))
                                    }}
                                >Out of Stock</button>
                                <button
                                    className="btn btn-danger m-1"
                                    onClick={() => {
                                        handleCurrentListDelete(e.id)
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>


                    )) : orderedList.map((e) => (
                        < div key={e.id} >
                            <div>
                                Ordered Item  : {e.name}
                                <button
                                    className="btn btn-info m-1"
                                    onClick={() => {
                                        handleDelete(e.id)
                                        moveItems(e)
                                    }}
                                >Move</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export { BottomSection };