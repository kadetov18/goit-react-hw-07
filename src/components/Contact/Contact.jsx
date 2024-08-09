// src/components/Contact/Contact.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps"; // Правильний шлях
import s from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact}>
      <div>
        <p className={s.contactName}>
          <FaUser />
          <span className={s.contactSpan}>{name}</span>
        </p>
        <p className={s.contactNumber}>
          <FaPhone />
          <span className={s.contactSpan}>{number}</span>
        </p>
      </div>
      <button
        className={s.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
