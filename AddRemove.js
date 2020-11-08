import React from 'react';
import data from '../'


const AddRemove = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className='list'>
                        <h4> {name} </h4>
                        <button onClick= {() => removeItem(id)}> remove</button>
                    </div>
                );
            }
            )}
            <button className='btn' onClick={() => setPeople([])}>Clear items </button>
        </>
    );
};
export default AddRemove
