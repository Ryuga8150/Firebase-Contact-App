import PropTypes from "prop-types";

FormField.propTypes = {
  fieldName: PropTypes.string,
  children: PropTypes.node,
};
function FormField({ fieldName, children }) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-lg capitalize">{fieldName}</label>
      {children}
    </div>
  );
}

export default FormField;
