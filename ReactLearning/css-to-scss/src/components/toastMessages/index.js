import React from 'react';
import './toastMessage.scss';

export const ToastMessage = (props) => {
  const closeToastMessage = () => {
    document.getElementById('toastmessageid').style.display = 'none';
  };
  return (
    <div className="toastposition shownotification" id="toastmessageid">{props.message}
      <i className="fa fa-times closenotification" onClick={closeToastMessage} />
    </div>
  );
};

export const showToastMessage = () => {
  if (document.getElementById('toastmessageid')) { document.getElementById('toastmessageid').style.display = 'block'; }
};
