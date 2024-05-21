import React from 'react'

const Home = () => {
  return (
    <>
    <div className="bg-blue-500 min-h-screen flex flex-col">
        <div className="flex justify-center text-8xl font-bold w-full text-white mt-8">
            Carryon Calculator
        </div>
        <div className="flex grow items-center justify-center text-center">
          <div class="h-auto bg-blue-200 w-1/2 p-10 rounded-xl border-blue-100 border-8">
            <h2 class="text-5xl mb-8">Enter your bag details:</h2>
            
            <form className="flex flex-col w-full items-center">
              <input type="number" className="mb-4 p-2 border rounded" placeholder="Length" />
              <input type="number" className="mb-4 p-2 border rounded" placeholder="Width" />
              <input type="number" className="mb-4 p-2 border rounded" placeholder="Height" />
              <input type="submit" className="border rounded bg-white p-3" value="Submit"/>
            </form>
          </div>
        </div>
    </div>
        
    </>
  )
}

export default Home