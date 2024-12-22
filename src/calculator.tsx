import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [inputbox, setInputbox] = useState<string>("");

  const handleClear = () => {
    setInputbox("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputbox(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalculate()
    }
  }

  const handleCalculate = () => {
    try{
        const result = new Function("return " + inputbox)()
        setInputbox(result.toString())
    }
    catch(err){
        setInputbox("Error! Invalid Characters")
    }
  }

  const handleButtonClick = (value: string) => {
    setInputbox((prev) => prev + value)
  }

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="xl:w-[20%] md:w-[50%] sm:w-[80%] h-auto flex flex-col justify-center items-center bg-slate-950 p-2 rounded-md">
        <div className="w-full mb-2">
          <input
            type="text"
            className="w-full p-3 bg-slate-900 text-white text-right"
            value={inputbox}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="0"
          />
        </div>
        <form className="w-full flex flex-wrap justify-center items-center text-white gap-4">
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-yellow-600 text-3xl" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-yellow-600 text-3xl" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-yellow-600 text-3xl" onClick={() => handleButtonClick("*")}>
            ×
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-yellow-600 text-3xl" onClick={() => handleButtonClick("/")}>
            ÷
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={() => handleButtonClick(".")}>
            .
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={handleCalculate}>
            =
          </button>
          <button type="button" className="w-[20%] p-2 flex items-center justify-center rounded-full bg-gray-600 text-3xl" onClick={handleClear}>
            AC
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;