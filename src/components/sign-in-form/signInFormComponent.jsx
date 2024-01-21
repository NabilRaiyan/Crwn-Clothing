import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../input-field/input-field.component";
import './sign-in-form.styles.scss';
import { UserContext } from "../../contexts/user.context";
import Button from "../button-component/button";

// default format for user
const defaultFormFields = {
    email: '',
    password: '',
    
}

// sing in component
const SignIn = ()=>{
     // logginng in user who signed in using google account using async() function
     const signInWithGoogle = async () =>{
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormField = ()=>{
        setFormFields(defaultFormFields);
    }

    //console.log(formFields)

    // handle submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        // signing in with email and password
        try
        {
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            console.log(user);
            resetFormField();
        }
        // handling error
        catch(error){
            switch(error.code){
                case 'auth/invalid-credential':
                    alert("Please enter correct email and password");
                    break;
                default: 
                    console.log(error);
            }
        }
    }

    // on user input field change
    const handleChnage = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        // adding form and functionality
        <div className="sign-in-container">
           <h2>Already have an account?</h2>
           <span>Sign In with your email and password</span>
           <form onSubmit={handleSubmit}>
                <h1>Sign In form using email and password</h1>
                
                <FormInput label='Email' type="email" required name="email" value={email} onChange={handleChnage}/>
                <FormInput label='Password' type="password" required name="password" value={password} onChange={handleChnage}/>
                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType='google'>GOOGLE SIGN IN</Button>
                </div>
           </form>
        </div>
    );
}

export default SignIn;