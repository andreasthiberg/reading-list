import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
      <header className="header">
        <div className="header-title-container">
        <h1 className="header-title">
            Reading list
        </h1>
        </div>
        <HamburgerMenu/>
      </header>
  );
}

export default Header;