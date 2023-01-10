import React from "react";
import { FormattedMessage } from "react-intl";
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <>
      <header className="hero-banner">
        <div className="dp-container">
          <div className="dp-rowflex">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/*
              TODO: make dynamic breadcrumb
            */}
              <nav className="dp-breadcrumb">
                <ul>
                  <li>
                    <a href="/#">Panel de Cotrol</a>
                  </li>
                  <li>
                    <a href="/#">Panel de SMS</a>
                  </li>
                  <li>Validación de Links</li>
                </ul>
              </nav>
              <h2>
                <FormattedMessage id="link_list_page.header.title" />
              </h2>
            </div>
            <div className="col-sm-10">
              <p>
                <FormattedMessage id="link_list_page.header.description" />
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
