import React, { useContext } from 'react'
import { CurrencyFormat } from '../../utils/CurrencyFormat'


function ListItem(props) {
    return (
        <li className="py-2">
            <div className="group flex justify-between gap-2 text-sm">
                <span>{props.description}</span>
                <div>
                    <span className={props.color}>{CurrencyFormat(props.ammount)}</span>
                    <span className="ml-2 hidden cursor-pointer font-medium text-blue-500 group-hover:inline-block"
                    onClick={()=>props.handleEdit(props.id)}>
                        Edit
                    </span>
                    <span className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                        onClick={() => props.DeleteItem(props.id)}>
                        Delete
                    </span>
                </div>
            </div>
        </li>
    )
}

export default ListItem