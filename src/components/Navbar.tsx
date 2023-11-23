function Navbar() {
  const user = localStorage.getItem("user");
  const initials = user ? JSON.parse(user).name[0] : "A";

  function logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <div className="navbar bg-base-200">
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
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-24"
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
