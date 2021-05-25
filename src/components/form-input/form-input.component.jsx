import React from 'react';
import './form-input.styles.scss';

// because we don'wanr any state of this component, we will use function

const FormInput = ({handleChange, label,...otherProps}) => (
<div className = 'group'>
    <input className ='form-input' onChange ={handleChange} {...otherProps}/>
    {
        label ?
        (<label className = {`${otherProps.value.length ? 'shrink': '' }form-input-label`}>
        {label}
        </label>)
        : null
    }
</div>
);

export default FormInput;