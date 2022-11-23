import { useEffect, useState } from "react";

const ProductOptions = ({ option, updateOption, title, current }) => {
  const [selected, setSelected] = useState("");
  const filteredOptions = option.values
    .map((v) => v.value)
    .filter((value, index, element) => element.indexOf(value) === index);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    updateOption({ [option.id]: selected });
  }, [selected]);

  return (
    <div className="flex flex-col gap-y-3">
      <select
        className="border-2 py-2 px-4 border-black"
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select {title}</option>
        {filteredOptions.map((v) => {
          return (
            <option value={v} key={v}>
              {v}
            </option>
          );
        })}
      </select>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2"></div>
    </div>
  );
};

export default ProductOptions;
