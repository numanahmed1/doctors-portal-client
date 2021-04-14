import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const AppointmentForm = ({ booking, modalIsOpen, closeModal }) => {
  const { subject } = booking;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{subject}</h2>
        <button onClick={closeModal}>close</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" />

          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
