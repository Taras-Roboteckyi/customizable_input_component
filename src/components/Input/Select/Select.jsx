export const Select = ({ value, onChange, option, text }) => {
  const { first, second, third } = option;

  return (
    <label className="mb-3">
      {text}:
      <select value={value} onChange={onChange}>
        <option value={first}>{first}</option>
        <option value={second}>{second}</option>
        {third && <option value={third}>{third}</option>}
      </select>
    </label>
  );
};
