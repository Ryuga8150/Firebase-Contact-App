import { BsPersonCircle } from "react-icons/bs";

function NoContacts() {
  return (
    <div className="flex grow items-center justify-center bg-transparent">
      <div className="flex items-center gap-4 text-2xl">
        <BsPersonCircle
          style={{
            fontSize: "32px",
            fill: "#243a77",
          }}
        />
        <span className=" text-gray-50">No Contacts Found</span>
      </div>
    </div>
  );
}

export default NoContacts;
