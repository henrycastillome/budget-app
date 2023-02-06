import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Currency = () => {

    const{allCurrencies, setNewCurrency}=useContext(AppContext)
    



    const handleSubmit=(e)=>{
        
       
        setNewCurrency(e.target.value.substring(0,1))
        
    }


    return (
        <div className='alert alert-info custom-bg' >
            <select onChange={handleSubmit} style={{ backgroundColor: '#92e499', color: '#49724d', padding: '3px', borderColor: '#49724d', borderRadius: '5px' }}>
                {allCurrencies.map(currencies =>
                    <option key={currencies.id} name={currencies.name}>{currencies.id} {currencies.name} </option>)}
            </select>
        </div>
    )
}

export default Currency