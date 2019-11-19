import React from 'react';
import './toastMessage.css';

export const ToastMessage = (props) => {
    const closeToastMessage = () => {
        document.getElementById("toastmessageid").style.display = "none";
    }
    return(
        <div class="toastposition shownotification" id="toastmessageid">{props.message}
            <i className="fa fa-times closenotification" onClick={closeToastMessage}></i>
        </div>
    )
}

export const showToastMessage = () =>  {
    if(document.getElementById("toastmessageid"))
        document.getElementById("toastmessageid").style.display = "block";
}
