import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "..";

describe("<Pagination />", () => {
  it("should render nav element", () => {
    const pageSize = 5;
    const totalPages = 7;
    const totalCount = totalPages * pageSize;

    render(
      <Pagination
        currentPage={1}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={jest.fn()}
      />
    );

    const navEl = screen.queryByLabelText("Pagination");
    expect(navEl?.tagName).toBe("NAV");

    const ulEl = screen.queryByLabelText("pagination-list");
    expect(ulEl?.childElementCount).toBe(totalCount / pageSize + 2);

    const paginationItems = ulEl?.childNodes;
    expect(paginationItems?.[0]?.firstChild).toHaveClass("icon-arrow-prev");
    expect(paginationItems?.[1]?.firstChild).toHaveClass("dp-active-page");
    expect(paginationItems?.[1]?.firstChild).toHaveTextContent("1");
    expect(paginationItems?.[2]?.firstChild).toHaveTextContent("2");
    expect(paginationItems?.[3]?.firstChild).toHaveTextContent("3");
    expect(paginationItems?.[4]?.firstChild).toHaveTextContent("4");
    expect(paginationItems?.[5]?.firstChild).toHaveTextContent("5");
    expect(paginationItems?.[6]?.firstChild).toHaveTextContent("6");
    expect(paginationItems?.[7]?.firstChild).toHaveTextContent("7");
    expect(paginationItems?.[8]?.firstChild).toHaveClass("icon-arrow-next");
  });

  it("should render ellipsis to the right", () => {
    const pageSize = 5;
    const totalPages = 19;
    const totalCount = totalPages * pageSize;

    render(
      <Pagination
        currentPage={1}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={jest.fn()}
      />
    );

    const navEl = screen.queryByLabelText("Pagination");
    expect(navEl?.tagName).toBe("NAV");

    const ulEl = screen.queryByLabelText("pagination-list");
    expect(ulEl?.childElementCount).toBe(11);

    const paginationItems = ulEl?.childNodes;
    expect(paginationItems?.[0]?.firstChild).toHaveClass("icon-arrow-prev"); // <
    expect(paginationItems?.[1]?.firstChild).toHaveClass("dp-active-page");
    expect(paginationItems?.[1]?.firstChild).toHaveTextContent("1");
    expect(paginationItems?.[2]?.firstChild).toHaveTextContent("2");
    expect(paginationItems?.[3]?.firstChild).toHaveTextContent("3");
    expect(paginationItems?.[4]?.firstChild).toHaveTextContent("4");
    expect(paginationItems?.[5]?.firstChild).toHaveTextContent("5");
    expect(paginationItems?.[6]?.firstChild).toHaveTextContent("6");
    expect(paginationItems?.[7]?.firstChild).toHaveTextContent("7");
    expect(paginationItems?.[8]?.firstChild).toHaveClass("dp-pag-point"); //...
    expect(paginationItems?.[9]?.firstChild).toHaveTextContent(`${totalPages}`);
    expect(paginationItems?.[10]?.firstChild).toHaveClass("icon-arrow-next"); //>
  });

  it("should render ellipsis to the left", () => {
    const pageSize = 5;
    const totalPages = 19;
    const totalCount = totalPages * pageSize;

    render(
      <Pagination
        currentPage={totalPages}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={jest.fn()}
      />
    );

    const navEl = screen.queryByLabelText("Pagination");
    expect(navEl?.tagName).toBe("NAV");

    const ulEl = screen.queryByLabelText("pagination-list");
    expect(ulEl?.childElementCount).toBe(11);

    const paginationItems = ulEl?.childNodes;
    expect(paginationItems?.[0]?.firstChild).toHaveClass("icon-arrow-prev"); // <
    expect(paginationItems?.[1]?.firstChild).toHaveTextContent("1");
    expect(paginationItems?.[2]?.firstChild).toHaveClass("dp-pag-point"); //...
    expect(paginationItems?.[3]?.firstChild).toHaveTextContent("13");
    expect(paginationItems?.[4]?.firstChild).toHaveTextContent("14");
    expect(paginationItems?.[5]?.firstChild).toHaveTextContent("15");
    expect(paginationItems?.[6]?.firstChild).toHaveTextContent("16");
    expect(paginationItems?.[7]?.firstChild).toHaveTextContent("17");
    expect(paginationItems?.[8]?.firstChild).toHaveTextContent("18");
    expect(paginationItems?.[9]?.firstChild).toHaveClass("dp-active-page");
    expect(paginationItems?.[9]?.firstChild).toHaveTextContent(`${totalPages}`);
    expect(paginationItems?.[10]?.firstChild).toHaveClass("icon-arrow-next"); //>
  });

  it("should render two ellipsis", () => {
    const pageSize = 5;
    const totalPages = 19;
    const totalCount = totalPages * pageSize;

    render(
      <Pagination
        currentPage={10}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={jest.fn()}
      />
    );

    const navEl = screen.queryByLabelText("Pagination");
    expect(navEl?.tagName).toBe("NAV");

    const ulEl = screen.queryByLabelText("pagination-list");
    expect(ulEl?.childElementCount).toBe(11);

    const paginationItems = ulEl?.childNodes;
    expect(paginationItems?.[0]?.firstChild).toHaveClass("icon-arrow-prev"); // <
    expect(paginationItems?.[1]?.firstChild).toHaveTextContent("1");
    expect(paginationItems?.[2]?.firstChild).toHaveClass("dp-pag-point"); //...
    expect(paginationItems?.[3]?.firstChild).toHaveTextContent("8");
    expect(paginationItems?.[4]?.firstChild).toHaveTextContent("9");
    expect(paginationItems?.[5]?.firstChild).toHaveTextContent("10");
    expect(paginationItems?.[5]?.firstChild).toHaveClass("dp-active-page");
    expect(paginationItems?.[6]?.firstChild).toHaveTextContent("11");
    expect(paginationItems?.[7]?.firstChild).toHaveTextContent("12");
    expect(paginationItems?.[8]?.firstChild).toHaveClass("dp-pag-point"); //...
    expect(paginationItems?.[9]?.firstChild).toHaveTextContent(`${totalPages}`);
    expect(paginationItems?.[10]?.firstChild).toHaveClass("icon-arrow-next"); //>
  });

  it("should handle pagination items on click", () => {
    const setCurrentPageMock = jest.fn();
    const currentPage = 5;
    const pageSize = 5;
    const totalPages = 10;
    const totalCount = totalPages * pageSize;

    render(
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={setCurrentPageMock}
      />
    );

    expect(setCurrentPageMock).not.toBeCalled();

    const previousEl = screen.getByTestId("prev-button") as HTMLElement;

    fireEvent.click(previousEl);

    expect(setCurrentPageMock).toBeCalledTimes(1);
    expect(setCurrentPageMock).toBeCalledWith(5 - 1);

    setCurrentPageMock.mockClear();

    const nextEl = screen.getByTestId("next-button") as HTMLElement;

    fireEvent.click(nextEl);

    expect(setCurrentPageMock).toBeCalledTimes(1);
    expect(setCurrentPageMock).toBeCalledWith(currentPage + 1);

    setCurrentPageMock.mockClear();

    const numText = "4";
    const numEl = screen.queryByText(numText) as HTMLElement;

    fireEvent.click(numEl);

    expect(setCurrentPageMock).toBeCalledTimes(1);
    expect(setCurrentPageMock).toBeCalledWith(Number(numText));
  });
});
