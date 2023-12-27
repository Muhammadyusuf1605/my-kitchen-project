

function HeaderBg() {
  return (
    <div className="site-container flex justify-between items-center py-5 px-3">
      <h2 className="text-orange-50 text-3xl">Theme</h2>
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
