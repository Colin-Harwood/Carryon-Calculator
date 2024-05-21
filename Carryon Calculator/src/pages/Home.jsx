import React from 'react'

const Home = () => {
  return (
    <>
        <div className="flex justify-center text-8xl font-bold w-full">
            Carryon Calculator
        </div>
        <div className="bg-blue-500 flex flex-col items-center justify-center text-center min-h-screen">
          <h2 class="text-5xl mb-8">Enter your bag details:</h2>
          <form className="flex flex-col w-1/2 items-center">
            <input type="number" className="mb-4 p-2 border rounded w-2/3" placeholder="Length" />
            <input type="number" className="mb-4 p-2 border rounded w-2/3" placeholder="Width" />
            <input type="number" className="mb-4 p-2 border rounded w-2/3" placeholder="Height" />
            <input type="submit" className="border rounded bg-white p-3 w-1/2 " value="Submit"/>
          </form>
        </div>
    </>
  )
}

export default Home