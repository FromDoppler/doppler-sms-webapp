import React from "react";
import { useLinks } from "./hooks/useLinks";
import { LinkRow, NavBar } from "./components";
import { FormattedMessage } from "react-intl";

export interface LinksGridInterface {}
const LinksGrid: React.FC<LinksGridInterface> = () => {
  const pageSize = 5;

  const { filteredLinks } = useLinks({
    pageSize,
    currentPage: 1,
  });

  return (
    <>
      <section className="dp-container">
        <div className="dp-rowflex">
          <div className="col-sm-12">
            <div className="dp-table-responsive dp-table-selection-list">
              <NavBar />
              <table className="dp-c-table">
                <thead>
                  <tr>
                    <th>
                      <a href="/#">
                        <FormattedMessage id="link_list_page.links_grid.link_th" />
                        <span className="ms-icon icon-AZ"></span>
                      </a>
                    </th>
                    <th>
                      <a href="/#">
                        <FormattedMessage id="link_list_page.links_grid.status_th" />
                        <span className="ms-icon icon-AZ"></span>
                      </a>
                    </th>
                    <th>
                      <a href="/#">
                        <FormattedMessage id="link_list_page.links_grid.last_verification_th" />
                        <span className="ms-icon icon-AZ"></span>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <LinkRow filteredLinks={filteredLinks} />
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>pagination component here</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinksGrid;
