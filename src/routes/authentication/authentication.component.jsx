import SignUpform from "../../compenents/sign-up-form/sign-up-form.component";
import SignInForm from "../../compenents/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"
const Authentication = () => {
    
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpform />  
        </div>
    );
};

export default Authentication;