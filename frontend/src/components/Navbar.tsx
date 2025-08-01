
const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Projects', href: '/projects' },
  { name: 'Bugs', href: '/bugs' },
  { name: 'Tasks', href: '/tasks' },
]

function Navbar() {
  return (
    <div className="w-full max-w-screen mx-auto py-3 px-4 flex justify-between items-center border-b-1 border-border-dark p-0">

      {/* Logo */}
      <h1 className="font-hero text-3xl ">BugsBunny</h1>

      {/* Navigation */}
      <div className="ml-4 flex-1 flex justify-between items-center">

        {/* Navigation Items */}
        <ul className="flex gap-4 pt-2 items-center">
          {navItems.map((item) => (<li><a className="">{item.name}</a></li>))}
        </ul >

        {/* Utilities */}
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
        </div>

      </div >

      {/* 
        //TODO: Dropdown Menu / Hamburger Menu
      */}

    </div >
  )
}

export default Navbar