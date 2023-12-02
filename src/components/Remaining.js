import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, remaining, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType} col-3 me-1 pt-4 text-center`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};
export default Remaining;
