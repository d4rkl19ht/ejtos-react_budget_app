import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle} from 'react-icons/fa';
import { FaMinusCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td className="text-center"><FaPlusCircle size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td className="text-center"><FaMinusCircle size='1.5em' color='orange' onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td className="text-center"><FaTimesCircle size='1.5em' color='red' onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;