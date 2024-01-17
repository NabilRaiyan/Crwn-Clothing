import { useState } from "react";

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

    // console.log(formFields)

    // on user input field change
    const handleChnage = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        // adding form and functionality
        <div>
           <form onSubmit={()=>{}}>
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