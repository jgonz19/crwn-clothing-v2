import SignUpform from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from "./authentication.styles.jsx"
const Authentication = () => {
    
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpform />
        </AuthenticationContainer>
    );
};

export default Authentication;