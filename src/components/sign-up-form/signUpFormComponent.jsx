import { useState } from "react";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = ()=>{

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    return(
        <div>
           <form onSubmit={()=>{}}>
                <h1>Sign up form using email and password</h1>
                <label>Username</label>
                <input placeholder = 'e.g Raiyan' type="text" required/>

                <label>Email</label>
                <input placeholder="e.g raiyan7@gmail.com" type="email" required/>

                <label>Password</label>
                <input type="password" required/>

                <label>Confirm Password</label>
                <input type="password" required/>
                <button type="submit">SIGN UP</button>
           </form>
        </div>
    );
}

export default SignUp;