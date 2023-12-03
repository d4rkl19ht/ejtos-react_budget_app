import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining,currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const submitEvent = () => {
        if(cost > remaining && action === 'Add') {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div className="container p-0 alert alert-primary">
            <div className='row d-flex m-2 px-4 pt-2 border border-light border-radius-lg ' style={{height:67}}>
                <div class="input-group col  p-0 me-1 mh-100">
                    <label class="input-group-text alert alert-secondary" style={{height:50}} for="inputGroupSelect01">Department</label>
                    <select className="form-select" id="inputGroupSelect01" style={{height:50}} onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="Human Resource" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>
                </div>

                <div class="input-group col p-0 me-1 mh-100">
                    <label class="input-group-text alert alert-secondary" style={{height:50}} for="inputGroupSelect02">Action</label>
                    <select className="form-select" style={{height:50}} id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                </div>
                <div className="input-group col">
                    <span class="input-group-text" style={{height:50}}>{currency}</span>
                    <input
                        required='required'
                        className="form-control p-0 me-1 text-center"
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(e)=>setCost(e.target.value)}
                        style={{height:50, width:'75%'}}
                        placeholder = "Enter budget to add/reduce"
                        
                    >
                    </input>
                </div>
                <button className="btn btn-primary col" style={{height:50}} onClick={submitEvent}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AllocationForm;
