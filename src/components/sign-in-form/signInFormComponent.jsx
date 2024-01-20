import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../input-field/input-field.component";
import './sign-in-form.styles.scss';
import Button from "../button-component/button";

// default format for user
const defaultFormFields = {
    email: '',
    password: '',
    
}

// sing in component
const SignIn = ()=>{

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormField = ()=>{
        setFormFields(defaultFormFields);
    }

    //console.log(formFields)

    // handle submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            

        }catch(err){
            
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
                <Button type="submit">SIGN IN</Button>
           </form>
        </div>
    );
}

export default SignIn;