import React from 'react';

function Alert(props) {  // Destructuring alert from props
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert && (  // Accessing props.alert
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}  {/* Displaying the alert message and type */}
        <button 
          type="button" 
          className="btn-close" 
          data-bs-dismiss="alert" 
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alert;
