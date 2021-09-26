import React from "react";

const BookModal = (props) => {
  const { children } = props;
  return (
    <div className="modal-container">
      <div className="modal">
        {children}
      </div>
    </div>
  )
};

export default BookModal;
