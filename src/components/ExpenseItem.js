import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppContext } from '../context/AppContext';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'


const ExpenseItem = (props) => {
	const { dispatch, newCurrency } = useContext(AppContext);

	const handleDeleteExpense = (name) => {
		const decrease={
			name: name,
			cost:10,

		}
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: decrease,
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


	return (
		<tr>
		<td>{props.name}</td>
		<td>{newCurrency} {props.cost}</td>
		<td><FontAwesomeIcon icon={faCirclePlus} color='#4fac5b' size='3x'cursor='pointer' onClick={event=> increaseAllocation(props.name)}/></td>
		<td><FontAwesomeIcon icon={faCircleMinus} color='red' size='3x'cursor='pointer' onClick={event=>handleDeleteExpense(props.name)}/> </td>
		</tr>
	);
};

export default ExpenseItem;
// dispatching an action. Your action contains the type (so the reducer knows how to update the state) and the payload.
//  In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).
