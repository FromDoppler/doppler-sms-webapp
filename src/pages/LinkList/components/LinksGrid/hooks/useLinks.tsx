import { useState, useEffect } from "react";
import { Links } from "../data/Links";
import { Link } from "../interfaces/Link";

export interface useLinksInterface {
  currentPage: number;
  pageSize: number;
}

export const useLinks = ({ currentPage, pageSize }: useLinksInterface) => {
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);
  const totalCount = Links.length;

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    setFilteredLinks(Links.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, pageSize]);

  return {
    filteredLinks,
    totalCount,
  };
};
