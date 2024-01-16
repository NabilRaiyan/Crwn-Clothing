import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = ()=>{

    // logginng in user who signed in using google account 
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google pop up</button>
        </div>
    )
}

export default SignIn;