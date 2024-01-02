

function HeaderBg() {
  return (
    <div className="site-container flex items-center justify-between py-3 lg:py-6 px-2 lg:px-3">
      <h2 className="text-white text-2xl lg:text-3xl font-semibold lg:font-bold">Theme</h2>
      <div className="flex gap-4">
        <div className="w-7 h-7 rounded-[50%] bg-slate-700 cursor-pointer"></div>
        <div className="w-7 h-7 rounded-[50%] bg-orange-400 cursor-pointer"></div>
        <div className="w-7 h-7 rounded-[50%] bg-yellow-500 cursor-pointer"></div>
        <div className="w-7 h-7 rounded-[50%] bg-green-400 cursor-pointer"></div>
      </div>
    </div>
  )
}

export default HeaderBg
