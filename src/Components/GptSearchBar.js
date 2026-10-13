import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="flex justify-center pt-20">
      <form className="bg-black p-4 rounded-lg w-full max-w-2xl flex gap-2">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-3 rounded-md flex-grow outline-none"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;