import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="site-container flex justify-between py-6 px-3">
      <Link to="/" className="text-white text-3xl font-bold">Cooking</Link>
      <div className="flex gap-3 justify-center items-center">
        <h3 className="text-xl text-slate-800">Welcome:</h3>
        <button className="btn btn-primary s-btn-b-r">Create</button>
        <button className="btn btn-error s-btn-b-r">Sing Out</button>
      </div>
    </div>
  )
}

export default Header
