import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
        
    }
    return (
        <div className='alert alert-success col-sm'>
            <select className="form-select" name="currency" id="currency" onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option selected value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;