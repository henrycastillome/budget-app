import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CurrencyInput from 'react-currency-input-field'


const Budget = () => {
    const { newBudget, setNewBudget, expenses, newCurrency} = useContext(AppContext)
    const [budgetEdit, setBudgetEdit] = React.useState(null)
    const [editText, setEditText] = React.useState(newBudget)

    const totalExpenses=expenses.reduce((total, item) => {
        return (total += item.cost);
    },0)

    

    const handleEdit = newBudget => {
        if (editText>20000){
            alert('the value cannot be more than $20.000')
            return
        }
        else if (editText < totalExpenses){
            alert('you cannot reduce the budget value lower than the spending')
        }
        else {
        newBudget = editText;
        setNewBudget(editText)
        setBudgetEdit(null)
        }
    }
    const handleClick =() => {
        setBudgetEdit(newBudget)
        setEditText(newBudget)
    }





    return (
        <div className='alert alert-secondary'>
            {newBudget === budgetEdit ? <span><CurrencyInput prefix={newCurrency} step={10}  placeholder={newCurrency}  defaultValue={editText} onValueChange={(value) => setEditText(parseFloat(value.replace(newCurrency,'')))} /></span> : (<span> Budget: {newCurrency} {newBudget.toLocaleString()}</span>)}
            {newBudget === budgetEdit ? (<span> <button style={{ border: "2px solid black", borderRadius: '5px' }} onClick={() => handleEdit(newBudget)}>Save</button> </span>) :
            ( <span style={{paddingLeft:'10px'}}><button style={{ border: "2px solid black", borderRadius: '5px' }} onClick={handleClick}>Edit</button> </span>)}


        </div>
    )
}

export default Budget