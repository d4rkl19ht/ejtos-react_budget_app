import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Currency from './components/Currency';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                                <Budget />
                                <Remaining />
                                <ExpenseTotal />
                                <Currency />
                    </div>
                    <div className = "row ">
                        {
                            /* Add ExpenseList component here */
                            <>
                                <h1>Allocation</h1>
                                <ExpenseList />
                            </>
                        }         
                            
                        {
                            /* Add ExpenseItem component here */
                            <>
                            <h3>Change Allocation</h3>
                            <AllocationForm />
                            </>
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
