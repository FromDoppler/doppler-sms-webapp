import React from "react";
import { Link } from "./../../interfaces/Link";
import { FormattedMessage, useIntl, FormattedDate } from "react-intl";

export interface LinkRowInterface {
  filteredLinks: Link[];
}
const LinkRow: React.FC<LinkRowInterface> = ({ filteredLinks }) => {
  const intl = useIntl();
  return (
    <>
      {filteredLinks.length ? (
        filteredLinks.map((el, index) => (
          <tr key={index}>
            <td>
              <span> {el.link} </span>
            </td>
            <td>
              <span className="dp-event-label">{el.status}</span>
            </td>
            <td>
              <span>
                {!el.verifiedAt || (
                  <span title={intl.formatDate(el.verifiedAt)}>
                    <FormattedDate value={el.verifiedAt} />
                  </span>
                )}
              </span>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>
            <FormattedMessage id="link_list_page.links_grid.no_data" />
          </td>
        </tr>
      )}
    </>
  );
};

export default LinkRow;
