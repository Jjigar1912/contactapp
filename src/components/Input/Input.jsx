const Input = (props)=>{
    return(
        <>
            <input type={props.type} required={ props.required } name={props.name} value={props.value} onChange={props.setValue} placeholder={props.placeholder} autoComplete="off" />
        </>
    )
}
export default Input ;