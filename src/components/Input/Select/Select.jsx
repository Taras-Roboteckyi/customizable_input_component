export const Select = ({ value, onChange, option }) => {
  const { first, second, third } = option;

  return (
    <label>
      Label size:
      <select value={value} onChange={onChange}>
        <option value={first}>{first}</option>
        <option value={second}>{second}</option>
        <option value={third}>{third}</option>
      </select>
    </label>
  );
};
