import './button.styles.scss';


// button class type
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

// adding button style class 
const Button = ({children, buttonType, ...otherProps})=>{
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
            {children}
        </button>
    );
}

export default Button;