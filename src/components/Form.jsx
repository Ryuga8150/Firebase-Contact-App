import { useModalContext } from "../context/ModalContext";
import FormField from "./FormField";
import { useForm } from "react-hook-form";

function Modal() {
  const { register, handleSubmit, reset } = useForm();
  const { handleShowModal } = useModalContext();
  const onSubmit = function (data) {
    console.log(data);
    reset();
    handleShowModal();
  };

  const onError = function (errors) {
    console.log(errors);
  };
  return (
    <form
      className="absolute top-4 flex w-full flex-col gap-4 bg-gray-50 px-2 py-4"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormField fieldName="name">
        <input
          type="text"
          className="border-2 border-gray-900 px-2 py-2"
          id="name"
          {...register("name")}
        />
      </FormField>
      <FormField fieldName="email">
        <input
          type="email"
          className="border-2 border-gray-900 px-2 py-2"
          id="email"
          {...register("email")}
        />
      </FormField>

      <button
        type="submit"
        className="text-normal ml-auto w-1/3 rounded-md border-2 border-gray-900 bg-yellow-200 px-1 py-2 font-medium"
      >
        Add Contact
      </button>
    </form>
  );
}

export default Modal;
