import { Link } from "react-router-dom"

function Header() {
  const aaaaaaa = false
  return (
    <div className="site-container flex items-center justify-between py-3 lg:py-6 px-2 lg:px-3">
      <Link to="/" className="text-white text-2xl lg:text-3xl font-semibold lg:font-bold">Cooking</Link>
      <div className="flex gap-2 lg:gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center md:flex-row md:border-0 border-2 p-2 s-btn-b-r border-slate-300">
        {aaaaaaa && <h3 className="lg:text-xl text-lg md:dis text-white">Welcome:</h3>}
        <h3 className="lg:text-xl text-lg text-white">dcdscdcdfdfv</h3>
        </div>
        <button className="btn btn-primary text-xl s-btn-b-r">Create</button>
        <button className="btn btn-error text-xl s-btn-b-r">Sing Out</button>
      </div>
    </div>
  )
}

export default Header
