import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import useTheme from "~/utils/useTheme";

export default function GlobalModal({ isOpen, setIsOpen, children, disabled }) {
  const theme = useTheme();

  const customStyles = {
    overlay: {
      background: "linear-gradient(214deg, #542466, #244366)",
      zIndex: 100,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderStyle: "none",
      fontFamily: "Open sans",
      textAlign: "justify",
      overflow: "visible",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.lighter,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (!disabled) setIsOpen(false);
      }}
      style={customStyles}
      closeTimeoutMS={200}
    >
      {children}
    </Modal>
  );
}

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#modal");
}

GlobalModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

GlobalModal.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
  children: {},
  disabled: false,
};
