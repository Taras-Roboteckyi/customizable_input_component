export const Select = ({ value, onChange, option, text }) => {
  const { first, second, third } = option;
  /* bg-bg_color */
  return (
    <label className="mb-3 ">
      {text}:
      <select
        value={value}
        onChange={onChange}
        className="border-2 border-red-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <option value={first} className="border-2 border-rose-600">
          {first}
        </option>
        <option value={second}>{second}</option>
        {third && <option value={third}>{third}</option>}
      </select>
    </label>
  );
};
