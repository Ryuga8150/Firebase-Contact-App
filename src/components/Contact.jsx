import PropTypes from "prop-types";
import { BsPersonCircle, BsTrash3 } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { useModalContext } from "../context/ModalContext";

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

function Contact({ id, name, email }) {
  console.log(id);

  const { handleShowModal } = useModalContext();

  // add such taht we click outside modal modal disappears

  return (
    <div className="flex items-center gap-4 rounded-lg bg-yellow-100 p-3">
      <BsPersonCircle
        style={{
          fontSize: "32px",
          fill: "#fb923c",
        }}
        className="cursor-pointer"
      />
      <div className="text-md flex grow flex-col gap-0.5 ">
        <span className="font-semibold">{name}</span>
        <span>{email}</span>
      </div>
      <FaUserEdit
        style={{
          fontSize: "32px",
          fill: "#fb923c",
        }}
        className="cursor-pointer"
        onClick={handleShowModal}
      />
      <BsTrash3
        style={{
          fontSize: "32px",
          fill: "#fb923c",
        }}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Contact;
