import CommonButton from "../CommonButton/CommonButton"
import css from "./GeneralAuthenticationBar.module.css";

const GeneralAuthenticationBar =({onOpen, isOpen})=> {
   
    // const { logOut,} = isOpen
    // console.log(logOut);
    
    
    return (
        <div>
        {/* <CommonButton onclick={()=>{setIsOpen({...isOpen, logOut:true })}}>LogOut</CommonButton>
        <CommonButton onclick={()=>{setIsOpen({...isOpen, logIn:true })}}>LogIn</CommonButton>
        <CommonButton onclick={()=>{setIsOpen({...isOpen, signIn:true })}}>Registration</CommonButton> */}
        <CommonButton onHandle={()=>{onOpen(isOpen,"logOut")}}>LogOut</CommonButton> 
        <CommonButton  onHandle={()=>{onOpen(isOpen,"logIn")}}>LogIn</CommonButton> 
        <CommonButton  onHandle={()=>{onOpen(isOpen,"signIn")}}>Registration</CommonButton> 
        </div>
        
    )


}
export default GeneralAuthenticationBar;