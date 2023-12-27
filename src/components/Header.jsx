function Header() {
  return (
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold underline">Cooking</h2>
      <div>
        <h3>Welcome:</h3>
        <button>Create</button>
        <button>Sing Out</button>
      </div>
    </div>
  )
}

export default Header
