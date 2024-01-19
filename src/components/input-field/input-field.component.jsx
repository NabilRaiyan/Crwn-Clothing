import '../input-field/form-input.styles.scss';

const FormInput = ({label, ...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {
                label && (
                    <label className={`${otherProps.value.length ? 'srink' : ''} form-input-label`}>{label}</label>
                )
            }
        </div>
    );
}

export default FormInput;