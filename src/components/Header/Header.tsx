import './Header.scss';

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <h1>Dashboard</h1>
      <input type="text" placeholder="Search..." />
    </header>
  );
}

export default Header;
