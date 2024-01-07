import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from '../../context/EntriesContext'

function UnorederList(props) {
    const { data, setData } = useContext(DataContext)
    const entries = data.filter((item) => item.type === props.type)
    console.log(entries)

    const DeleteItem = (id) => {
        let updatedData = data.filter((item) => item.id !== id)
        console.log("Deleted");
        setData(updatedData);
    }

    const handleEdit = (id) => {
        let updatedData = data.map((item) => {
            if (item.id === id) {
                const title = prompt('Description: ', item.desc);
                const amount = prompt('Amount: ', item.ammount);
                return {
                    ...item,
                    desc: title || item.desc,
                    ammount: parseFloat(amount) || item.ammount,
                };
            }
            return item;
        });
        setData(updatedData);
    };

    return (
        <div>
            <ul id={props.id} className="divide-y">
                {entries.map((item, index) => (
                    <ListItem
                        key={index}
                        id={item.id}
                        description={item.desc}
                        color={props.color}
                        ammount={item.ammount}
                        DeleteItem={DeleteItem}
                        handleEdit={handleEdit}
                    />
                ))}
            </ul>
        </div>
    )
}
export default UnorederList