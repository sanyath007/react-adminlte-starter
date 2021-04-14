import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import AppHeader from '../MainHeader';
import AppSidebar from '../MainSidebar';
import AppFooter from '../MainFooter';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <AppHeader />

      <AppSidebar />

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">

        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard v3</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="content">

          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : (null);
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>

        </section>

      </div>

      <AppFooter />

    </div>
  );
};

export default MainLayout;
