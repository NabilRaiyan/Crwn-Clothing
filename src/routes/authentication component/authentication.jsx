import SignUp from '../../components/sign-up-form/signUpFormComponent';
import SignIn from '../../components/sign-in-form/signInFormComponent';
import './authentication.styles.scss';

const Authentication = ()=>{
    return(
        <div className='authentication-container'>
            <SignIn></SignIn>
            <SignUp />
        </div>
    )
}

export default Authentication;