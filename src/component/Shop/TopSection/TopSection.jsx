import React from 'react';
import { nanoid } from 'nanoid';
import { BottomSection } from '../BottomSection/BottomSection';


const TopSection = () => {
    //States
    const [query, setQuery] = React.useState("");
    const [currentList, setCurrentList] = React.useState([]);
    const [orderedList, setOrderedList] = React.useState([]);

    //Input text handle
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    //add the item to the currentList
    const handleCurrentList = () => {
        if (query === "") {
            return alert("Please add an item ")
        }
        const payload = {
            id: nanoid(4),
            name: query

        }
        setCurrentList([...currentList, payload])
        setQuery("")
    }

    //add the item to the orderedList
    const handleOrderedList = () => {
        if (query === "") return alert("Please add an item ")
        const payload = {
            id: nanoid(4),
            name: query
        }
        setOrderedList([...orderedList, payload])
        setQuery("")

    }

    //Move item from orderedList to the currentList
    const moveItems = (id) => {
        setCurrentList([...currentList, id])

    }

    //Delete an item from the orderedList when it's moved to the currentList
    const handleDelete = (id) => {
        const updateList = orderedList.filter((e) => e.id !== id)
        setOrderedList(updateList)

    }

    //delete an item in currentList
    const handleCurrentListDelete = (id) => {
        const updateList = currentList.filter((e) => e.id !== id);
        setCurrentList(updateList)

    }

    return (
        <>
            <div>
                <h2
                    className="my-3 text-success"
                >Top Section</h2>
                <input
                    value={query}
                    onChange={handleChange}
                    className="form-control col-3 container my-2"
                    type="text"
                    placeholder="Add an Item to the list..." />

                {/* CurrentList Button */}
                <button
                    onClick={handleCurrentList}
                    className="btn btn-primary mx-1 col-1"
                >
                    Add an Item To the Current List
                </button>

                {/* OrderedList Button */}
                <button
                    onClick={handleOrderedList}
                    className="btn btn-success mx-1 col-1"
                >
                    Add an Item To the Ordered List
                </button>

                <hr
                    className="my-5 w-75"
                    style={{
                        backgroundColor: "white"
                    }}
                />

                {/* sending functions as props to the BottomSection */}
                <BottomSection
                    currentList={currentList}
                    orderedList={orderedList}
                    moveItems={moveItems}
                    handleDelete={handleDelete}
                    handleCurrentListDelete={handleCurrentListDelete}
                />

            </div>
        </>
    )
}
export { TopSection }



