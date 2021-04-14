import React from 'react';
import { Link } from 'react-router-dom';

const MainSidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      {/* Sidebar */}
      <section className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
          </div>
          <div className="info">
            <Link to="/profile">Alexander Pierce</Link>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item has-treeview menu-open">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  Profile
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-chart-pie"></i>
                <p>
                  Charts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/chartjs" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>ChartJS</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/flot" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Flot</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/inline" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Inline</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default MainSidebar;
