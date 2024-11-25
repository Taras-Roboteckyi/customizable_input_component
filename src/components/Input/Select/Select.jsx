export const Select = ({ value, onChange, option, text }) => {
  const { first, second, third } = option;
  /* bg-bg_color */
  return (
    <div className=" flex  justify-items-start mb-3">
      <label className="w-40 text-white mr-2 ">{text}:</label>
      <select
        value={value}
        onChange={onChange}
        className="w-40  border-2 border-white rounded-md p-0.6 h-6 text-sm bg-bg_color text-white focus:outline-none focus:border-blue-500"
      >
        <option value={first} className="">
          {first}
        </option>
        <option value={second}>{second}</option>
        {third && <option value={third}>{third}</option>}
      </select>
    </div>
  );
};
