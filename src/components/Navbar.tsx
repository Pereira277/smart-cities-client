function Navbar() {
  const user = localStorage.getItem("user");
  const initials = user ? JSON.parse(user).name[0] : "A";

  function logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <div className="navbar bg-base-100">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SOS Smart Cities</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar placeholder"
          >
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span>{initials}</span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => logout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
