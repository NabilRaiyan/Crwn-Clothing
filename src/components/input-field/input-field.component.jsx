import '../input-field/form-input.styles.scss';

// creating input field component and using spread operator
const FormInput = ({label, ...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {
                label && (
                    // using conditional (ternary) operator to implement shring animation
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
        </div>
    );
}

export default FormInput;