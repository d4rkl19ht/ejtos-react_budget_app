import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,currency,expenses } = useContext(AppContext);
    // const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The budget cannot exceed 20000.");
            return;
        }

        let totalExp = expenses.reduce((total,expense)=>total+=expense.cost,0)
        if(event.target.value < totalExp) {
            alert("You cannot reduce the budget value lower than the spending.")
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        })
    }
    return (
        <div className="col me-1 alert alert-secondary">
            <div className="row">
                <div className="col-5"><label for="budget" className="form-label mt-2">Budget:   {currency}</label></div>
                <div className="col-7"><input type="number" className="form-control"  step="10" value={budget} onChange={handleBudgetChange} name="budget" id="budget"></input></div>
            </div>
        </div>
    );
};
export default Budget;