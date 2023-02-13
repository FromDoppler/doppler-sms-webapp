import { getPaginationRange } from "../getPaginationRange";
describe("getPaginationRange()", () => {
  it("the total count less than the page size should return the range [1]", () => {
    expect(
      getPaginationRange({
        totalCount: 4,
        pageSize: 5,
        currentPage: 1,
      })
    ).toEqual([1]);
  });
  it("the number of pages less than the page numbers should not show dots", () => {
    expect(
      getPaginationRange({
        totalCount: 7 * 5,
        pageSize: 5,
        currentPage: 1,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it("No left dots to show, but rights dots to be shown", () => {
    expect(
      getPaginationRange({
        totalCount: 110,
        pageSize: 5,
        currentPage: 1,
      })
    ).toEqual([1, 2, 3, 4, 5, 6, 7, "...", 22]);
  });
  it("No right dots to show, but left dots to be shown", () => {
    expect(
      getPaginationRange({
        totalCount: 110,
        pageSize: 5,
        currentPage: 22,
      })
    ).toEqual([1, "...", 16, 17, 18, 19, 20, 21, 22]);
  });
  it("should Both left and right dots to be shown", () => {
    expect(
      getPaginationRange({
        totalCount: 110,
        pageSize: 5,
        currentPage: 6,
      })
    ).toEqual([1, "...", 4, 5, 6, 7, 8, "...", 22]);
  });
});
