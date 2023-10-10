import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "./../firebase";
import Contact from "./Contact";
import Modal from "./Form";
import { useModalContext } from "../context/ModalContext";

//import NoContacts from "./NoContacts";
function Contacts() {
  const { showModal } = useModalContext();

  const [contactsList, setContactsList] = useState([]);

  const onSetContactsList = function (data) {
    setContactsList(data);
  };
  useEffect(function () {
    const getContacts = async function () {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnap = await getDocs(contactsRef);

        //console.log(contactsSnap);

        const contactLists = contactsSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        //console.log(contactLists);
        onSetContactsList(contactLists);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);

  //console.log(contactsList);

  return (
    <>
      <div className="relative flex flex-col gap-4 ">
        {contactsList?.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
          />
        ))}
        {showModal && <Modal />}
      </div>
    </>
  );
}

export default Contacts;
