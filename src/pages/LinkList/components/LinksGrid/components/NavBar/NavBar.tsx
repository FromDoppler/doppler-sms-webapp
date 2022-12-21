import React from "react";
import { FormattedMessage } from "react-intl";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  return (
    <>
      <div className="dp-container">
        <div className="col-sm-12 m-t-24 m-b-36">
          <div className="dp-title-block">
            <h3>
              <FormattedMessage id="link_list_page.title_navbar" />
            </h3>
            <button
              type="button"
              className="dp-button button-medium primary-green"
            >
              <FormattedMessage id="link_list_page.validate_link_button" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
