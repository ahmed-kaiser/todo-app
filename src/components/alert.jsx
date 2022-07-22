
function Alert(props) {
    if (props.errorMassage) {
        setTimeout(() => {
            props.setErrorMassage("");
        }, 4000)
        clearTimeout();
    }
    
    return (
        <>
        {props.errorMassage? 
            (<div className='errorText'> <p>{props.errorMassage}</p></div>)
               : (<span></span>)
        }
        </>
    )
}

export default Alert;