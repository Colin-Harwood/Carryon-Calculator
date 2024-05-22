import React, { useState } from 'react';

const Home = () => {
  const [unit, setUnit] = useState('cm'); // State to manage unit selection
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Length:', length);
    console.log('Width:', width);
    console.log('Height:', height);
  };

  return (
    <>
      <div className="bg-blue-500 min-h-screen flex flex-col">
        <div className="flex justify-center text-8xl font-bold w-full text-white mt-8 text-center mb-8">
          Carryon Calculator
        </div>
        <div className="flex grow items-center justify-center text-center">
          <div className="h-auto bg-blue-200 w-1/2 p-10 rounded-xl border-blue-100 border-8 mb-8">
            <h2 className="text-5xl mb-8 text-blue-500">Enter your bag details:</h2>
            
            <form className="flex flex-col w-full items-center" onSubmit={handleSubmit}>
              <div className="mb-4 flex justify-center items-center">
                <button
                  type="button"
                  onClick={() => setUnit('cm')}
                  className={`px-4 py-2 border border-r-0 rounded-l-md ${unit === 'cm' ? 'bg-blue-400 text-white' : 'bg-white text-blue-500'}`}
                >
                  cm
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('inches')}
                  className={`px-4 py-2 border rounded-r-md ${unit === 'inches' ? 'bg-blue-400 text-white' : 'bg-white text-blue-500'}`}
                >
                  inches
                </button>
              </div>
              <input
                type="number"
                className="mb-4 p-2 border rounded"
                placeholder={`Length (${unit})`}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                type="number"
                className="mb-4 p-2 border rounded"
                placeholder={`Width (${unit})`}
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
              <input
                type="number"
                className="mb-4 p-2 border rounded"
                placeholder={`Height (${unit})`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input type="submit" className="border rounded bg-white p-3" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
