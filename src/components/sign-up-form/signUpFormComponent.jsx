import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../input-field/input-field.component";
import './sign-up-form.styles.scss';
import Button from "../button-component/button";
//import { UserContext } from "../../contexts/user.context";

// default format for user
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
}

// sing up component
const SignUp = ()=>{

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // setting current user 
    //const {setCurrentUser} = useContext(UserContext);

    const resetFormField = ()=>{
        setFormFields(defaultFormFields);
    }

    //console.log(formFields)

    // handle submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert("Confirm password does not match with password!");
            return;
        }
        else{
            try{
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, {displayName});
                resetFormField();
                //console.log(user)
                //setCurrentUser(user);
    
            }catch(err){
                if (err.code === 'auth/email-already-in-use'){
                    alert("Can not create user , email already in use");
                }
                else{
                    console.log('User creation error', err);
                }
                
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
        <div className="sign-up-container">
           <h2>Don't have an account?</h2>
           <span>Sign Up with your eamil and password.</span>
           <form onSubmit={handleSubmit}>
                <h1>Sign up form using email and password</h1>
                
                <FormInput label='Username' type="text" required name="displayName" value={displayName} onChange={handleChnage}/>
                <FormInput label='Email' type="email" required name="email" value={email} onChange={handleChnage}/>
                <FormInput label='Password' type="password" required name="password" value={password} onChange={handleChnage}/>
                <FormInput label='Confirm Password' type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChnage}/>
                <Button type="submit">SIGN UP</Button>
           </form>
        </div>
    );
}

export default SignUp;