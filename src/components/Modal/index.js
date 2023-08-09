import React from "react";

const Modal = ({ isModalOpen, children }) => {
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="z-50 bg-white rounded-lg shadow-lg w-auto h-[auto]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
