import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// default format for user
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
}




const SignUp = ()=>{

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

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
                console.log(user)
    
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
        <div>
           <form onSubmit={handleSubmit}>
                <h1>Sign up form using email and password</h1>
                <label>Username</label>
                <input placeholder = 'e.g Raiyan' type="text" required name="displayName" value={displayName} onChange={handleChnage}/>

                <label>Email</label>
                <input placeholder="e.g raiyan7@gmail.com" type="email" required name="email" value={email} onChange={handleChnage}/>

                <label>Password</label>
                <input type="password" required name="password" value={password} onChange={handleChnage}/>

                <label>Confirm Password</label>
                <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChnage}/>
                <button type="submit">SIGN UP</button>
           </form>
        </div>
    );
}

export default SignUp;