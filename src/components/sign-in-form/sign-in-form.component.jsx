import { useState } from "react";
import { signInWithGooglePopup, signInAuthWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";


import {SignUpContainer, ButtonsContainer} from "./sign-in-form.style.jsx"


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInform = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try{
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert("incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async () =>{
        await signInWithGooglePopup();
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;//this word "name" will be used on the html element as prop to identiy the element that is updating
                                    //target is aiming the exact element(input)

        setFormFields({...formFields, [name]:value});//we set all the formfields with this sintaxys, 
                                                    // second argument, asign the array to the respective value
    }

    return(
        //eventhandler onSubmit get trigger with button child with type="submit". callback function is needed
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>
                Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />
                <FormInput 
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPES_CLASSES.google} type=''onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInform;