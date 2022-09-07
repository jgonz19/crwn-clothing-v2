import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss"


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpform = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }else{
                console.log('User created encountere an error', error);
            }
            
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;//this word "name" will be used on the html element as prop to identiy the element that is updating
                                    //target is aiming the exact element(input)
        setFormFields({...formFields, [name]:value});//we set all the formfields with this sintaxys, 
                                                    // second argument, asign the array to the respective value
    }

    return(
        //eventhandler onSubmit get trigger with button child with type="submit". callback function is needed
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>
                Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                />

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
                
                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />

             <Button buttonType='default' type="submit">Sign Up</Button>
            </form>
           
        </div>
    )
}

export default SignUpform;