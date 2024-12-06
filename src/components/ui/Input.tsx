import { useState } from "react"

function Input({ label , updateValue  }: { label: string , updateValue : Function }) {
    const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    updateValue(value); // Вызываем функцию для передачи значения вверх
  };
    return (
        <>

            <div className="">
                <label>{label}</label>
                <input value={inputValue} onChange={handleChange} className="bg-red-200 m-4" placeholder="write" ></input>
            </div>
        </>
    )
}
export default Input