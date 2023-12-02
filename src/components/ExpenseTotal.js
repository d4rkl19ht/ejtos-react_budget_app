import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { totalExpenses } = useContext(AppContext);
    /*const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0); 
    let totalExp = 0;
    expenses.map(exp=>totalExp+=exp.cost) */
    return (
        <div className={`alert alert-primary col-sm me-1 pt-4 text-center`}>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
