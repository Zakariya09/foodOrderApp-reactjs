import React, {useRef} from 'react';
import classes from './Input.module.css'

const Input   = React.ForwarRef((props, ref) => {
    return <div className ={classes.input}>
<label htmlFor={props.input.id}> {props.label} </label>
<input {...props.input}  ref = {ref} />
    </div>
})

export default Input;