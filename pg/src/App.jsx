import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [ch, setCh] = useState(false);
  const [ps, setPs] = useState("");


  const passref= useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = " ";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    if (num) str += "0123456789";
    if (ch) str += "!@#$%^&*()[]";

    for (let i = 1; i <= length; i++) {
      let chr = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(chr);
    }
    setPs(pass);
  }, [length, num, ch, setPs]);

  const cpypassword= useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(ps)
  },[ps])


  useEffect(() => {
    PasswordGenerator();
  }, [length, num, ch, PasswordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 justify-center  ">
      <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3 ml-2">
        <input
          type="text"
          value={ps}
          className="outline-none w-full m-2 rounded-lg"
          placeholder="Password"
          readOnly
          ref={passref}
        />
        <button onClick={cpypassword}
        className="m-2">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(+e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            id="numinput"
            onChange={() => setNum((prev) => !prev)}
          />
          <label htmlFor="numinput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 ">
          <input
            type="checkbox"
            defaultChecked={ch}
            id="charinput"
            onChange={() => setCh((prev) => !prev)}
          />
          <label htmlFor="charinput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
