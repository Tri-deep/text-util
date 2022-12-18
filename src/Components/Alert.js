import React from 'react'

export default function Alert(props) {
    const capitalise=(word)=>{
        const nword=word.toLowerCase();
        return nword.charAt(0).toUpperCase()+nword.slice(1);
  }
  return (
     
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
