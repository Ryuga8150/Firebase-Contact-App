import { IoIosAdd } from "react-icons/io";
import { useModalContext } from "../context/ModalContext";
function Icon() {
  const { handleShowModal } = useModalContext();
  return (
    <div className="flex h-12 w-12 items-center self-stretch rounded-full bg-gray-50 px-3 py-1.5">
      <IoIosAdd
        style={{
          fontSize: "32px",
          backgroundColor: "blue",
          width: "64px",
          height: "100%",
        }}
        className="cursor-pointer"
        onClick={handleShowModal}
      />
    </div>
  );
}

export default Icon;
