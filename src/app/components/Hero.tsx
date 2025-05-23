export default  function Hero() {


  return (
    <section className="container my-16 mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Find your next <br />
        dream job
      </h1>
      

      <form className="flex gap-2 mt-4 mx-auto item-center">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md"
          placeholder="Search phrase.."
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
}
