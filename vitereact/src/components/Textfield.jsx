

export const Textfield = ({ label, onChange }) => {
  return (
    <div>
      <label>
        {label}
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
}
