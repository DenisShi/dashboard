import { Link } from 'react-router-dom';
import './Sidebar.scss';

interface SidebarProps {
  isVisible: boolean;
}

function Sidebar({ isVisible }: SidebarProps) {
  return (
    <aside className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-item">
              <span className="material-icons">dashboard</span>
              {isVisible && <span className="nav-text">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/charts" className="nav-item">
              <span className="material-icons">show_chart</span>
              {isVisible && <span className="nav-text">Charts</span>}
            </Link>
          </li>
          <li>
            <Link to="/email" className="nav-item">
              <span className="material-icons">email</span>
              {isVisible && <span className="nav-text">Email</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
