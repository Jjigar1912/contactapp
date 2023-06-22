import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import context from "../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = (props)=>{
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");
    const {contact,setContacts,width} = useContext(context);
    const nameHandler = (e)=>{
        setName(e.target.value);
    }
    const numberHandler = (e)=>{
        setNumber(e.target.value);
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(name.trim().length===0 && email.trim().length === 0 && number.trim().length===0)
        {
            toast.error("All fields are required.")
        }
        else if(name.trim().length===0)
        {
            toast.error("Name is required");
        }
        else if(number.trim().length===0)
        {
            toast.error("Phone Number is Required");
        }
        else if(!(/^[a-zA-Z]+([a-zA-Z ])*$/.test(name.trim())))
        {
            toast.error("Enter Valid name.")
        }
        else if(!(/\b[6-9][0-9]{9}\b/.test(number)))
        {
            toast.error("Enter valid phone number.");
        }
        else if(email.trim().length===0)
        {
            toast.error("Email is required");
        }
        else if(!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)))
        {   
            toast.error("Enter Valid Email Id : ");
        }
        else
        {
            let contacts = localStorage.getItem("contactList");
            let obj = {
                id : Date.now(),
                name ,
                email ,
                contact : number
            }
            if(contacts===null)
            {
                let a = [ obj ]
                localStorage.setItem("contactList",JSON.stringify(a));
                saveData(a);     
            }
            else
            {
                let arrayOfContact = JSON.parse(localStorage.getItem("contactList"));
                for(let a of arrayOfContact)
                {
                    if(a.contact===obj.contact)
                    {
                        toast.error("Same Phone Number Exists.");
                        return ;
                    }
                    if(a.name.toUpperCase()===obj.name.toUpperCase())
                    {
                        toast.error(`${obj.name} already exists. Change Name !`);
                        return;
                    }
                }
                arrayOfContact.push(obj);
                localStorage.setItem("contactList",JSON.stringify(arrayOfContact));
                saveData(arrayOfContact);
            }
        }
    }
    const saveData = (obj)=>{
        setContacts(obj);
        setEmail("");
        setName("");
        setNumber("");
     }
    return(
        <>
            <ToastContainer />
            <div className="search">
                <Input type="search" name="search" placeholder="Search...." setValue={props.searchData}/>
            </div>
            {
                width > 920 && <div className="add">
                <form onSubmit={submitHandler} method="POST">
                <Input type="text" name="uname" placeholder="Name" setValue={nameHandler} value={name} />
                <Input type="number" name="contact" placeholder="Phone" setValue={numberHandler} value={number} />
                <Input type="email" name="email" placeholder="Email" setValue={emailHandler} value={email}/>
                <Input type="submit" name="Add" value="Add"  />
                </form>
                </div>
            }
        </>
    );
}
export default Main;