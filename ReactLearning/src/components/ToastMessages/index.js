import React from 'react';
import './ToastMessage.css';

export const ToastMessage = (props) => {
    const closeToastmessage = () => {
        document.getElementById("toastmessageid").style.display = "none";
    }
    return(
        <div class="toastposition shownotification" id="toastmessageid">{props.message}
            <i className="fa fa-times closenotification" onClick={closeToastmessage}></i>
        </div>
    )
}

export const showToastMessage = () =>  {
    document.getElementById("toastmessageid").style.display = "block";
}
