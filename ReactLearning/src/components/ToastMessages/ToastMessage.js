import React from 'react';
import './ToastMessage.css';

function ToastMessage(props) {
    function closeToastmessage() {
        document.getElementById("toastmessageid").style.display = "none";
    }
    return(
        <div class="toastposition shownotification" id="toastmessageid">{props.message}
            <i className="fa fa-times closenotification" onClick={closeToastmessage}></i>
        </div>
    )
}

export const showToastmessage = () =>  {
    document.getElementById("toastmessageid").style.display = "block";
}

export default ToastMessage;