import React from 'react';
import './toastMessage.css';

export const ToastMessage = (props) => {
    const { toastmessage } = props;
    const closeToastMessage = () => {
        document.getElementById("toastmessageid").style.display = "none";
    };
    return(
        <div className="toastposition shownotification" id="toastmessageid">{toastmessage}
            <i className="fa fa-times closenotification" onClick={closeToastMessage} />
        </div>
    );
};

export const showToastMessage = () =>  {
    if(document.getElementById("toastmessageid"))
        document.getElementById("toastmessageid").style.display = "block";
};