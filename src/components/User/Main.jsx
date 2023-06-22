import UserCard from "./UserCard";
import context from "../context";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileCard from "./MobileCard";
const Main = ()=>{
    const {contact,setContacts,width} = useContext(context);
    const [singleData,setData] = useState();
    const [isvisible,setVisible] = useState(false);
    
    const deleteData = (id)=>{
        let data = JSON.parse(localStorage.getItem("contactList"));   
        for(let index in data)
        {
            if(data[index].id===id)
            {
                data.splice(index,1);
                setVisible(false)
            }
        }
        localStorage.removeItem("contactList");
        localStorage.setItem("contactList",JSON.stringify(data));
        setContacts(data);
        toast.success("Contact Deleted Successfully.")
    }
    const getData = (id)=>{
        let data = JSON.parse(localStorage.getItem("contactList"));
        for(let a of data)
        {
            if(a.id===id)
            {
                setData(a);
            }
        }
        setVisible(true);
    }
    useEffect(()=>{
        setContacts(contact);
    },[contact]);
    return(
        <>
        
            <div className="card">
                <ul>  
                { 
                        contact!== undefined && contact !== null && contact.map((element)=>{
                            return(
                                <li  style={{display:"flex" , justifyContent : "space-between" }}>
                                    <h4 onClick={()=>getData(element.id)} style={{color : "blue"}}>{element.name}</h4>
                                    <button style={{backgroundColor : "orangered" , border : "none" , outline : "none" , padding : "5px 10px",color : "white",alignItems : "center","cursor" : "pointer"}} onClick={()=>deleteData(element.id)}>Delete</button>
                                </li>
                            );
                        })               
                }            
                </ul>
                <div className={`profile`}>
                    <UserCard singleData={singleData} visibility={isvisible} deleteData={deleteData} />
                </div>
            </div>
        </>
    );
}
export default Main;