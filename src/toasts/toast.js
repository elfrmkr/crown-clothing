import React from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const ToastMessage = ({ type, message }) => {
  toast[type](
    <div style={{ display: "flex", color: "black" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>,
    {
      theme: "colored",
    }
  );

  ToastMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  ToastMessage.dismiss = toast.dismiss;
};
