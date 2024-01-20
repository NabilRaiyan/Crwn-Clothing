import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/sign-up-form/signUpFormComponent';
import SignIn from '../../components/sign-in-form/signInFormComponent';

const Authentication = ()=>{
    return(
        <div>
            <h1>Sign In Page</h1>
            <SignIn></SignIn>
            <SignUp />
        </div>
    )
}

export default Authentication;