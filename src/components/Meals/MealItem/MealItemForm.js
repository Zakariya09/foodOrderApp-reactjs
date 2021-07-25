import React, {Fragment, userRef, useState}from 'react'
import classes from  './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = props =>{
    const [amountIsValid, setAmountIsValid] = useState(true); 
let amountInputRef = userRef();
const submitHandler = (event) =>{
    event.preventDefault();
const enteredAmount = amountInputRef.current.value;
const enteredAmountNumber = +enteredAmount;

if(enteredAmountNumber === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
setAmountIsValid(false);

}
props.onAddToCart(enteredAmountNumber);

}


    return <form onSubmit={submitHandler} className ={classes.form}>
<Input
ref= {amountInputRef}
 label ="Amount" input ={{
    id: 'amount__' + props.id,
    type: "number",
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
}} />
    <button type='submit'> Add
    </button>
    {!amountIsValid && <p> Please enter a valid amount (1-5).</p>}
    </form>
}

export default MealItemForm;