
function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="px-4 w-full max-w-screen mx-auto flex justify-between items-center">
        <div className="flex gap-2">
          {/* <a className="btn btn-ghost text-xl">bugs-bunny</a>
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
        </div>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar