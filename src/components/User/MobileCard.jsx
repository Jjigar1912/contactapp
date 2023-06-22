const MobileCard = (props)=>{
    console.log(props)
    if(props.visible){
        return(
            <div className="details">
            <h4>
              Name : <span>{props.singleData.name.toUpperCase()}</span>
            </h4>
            <h4>
              Email : <span>{props.singleData.email}</span>
            </h4>
            <h4>
              Phone No : <span>{props.singleData.contact}</span>
            </h4>
            <button onClick={() => props.deleteData(props.singleData.id)}>
              Delete
            </button>
          </div>
        
            );
    }
    
}
export default MobileCard;