import { useEffect, useState } from "react";

export default function NavPagination({
  breakLabel,
  firstLabel,
  onPageChange,
  pageRangeDisplayed,
  pageCount,
  lastLabel,
}) {
  const [pageDisplay, setPageDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    computePageDisplay();
  }, [currentPage]);
  function onPageClick(idx) {
    setCurrentPage(idx);
    onPageChange(idx);
    computePageDisplay();
  }

  function computePageDisplay() {
    let newDisplay = [];
    if (pageRangeDisplayed / 2 > currentPage) {
      console.log("처음");
      for (let i = 0; i < pageRangeDisplayed; i++) {
        newDisplay.push(i + 1);
      }
    } else if (pageCount - pageRangeDisplayed / 2 < currentPage) {
      console.log("끝");
      for (let i = pageCount - pageRangeDisplayed; i < pageCount; i++) {
        newDisplay.push(i + 1);
      }
    } else {
      console.log("중간");
      for (
        let i = Math.floor(currentPage - pageRangeDisplayed / 2);
        i < Math.floor(currentPage + pageRangeDisplayed / 2);
        i++
      ) {
        newDisplay.push(i + 1);
      }
    }
    setPageDisplay(newDisplay);
  }

  return (
    <nav
      aria-label="Page navigation example"
      className="flex justify-center mt-3"
    >
      <ul className="inline-flex space-x-2">
        <li>
          <div
            onClick={() => onPageClick(1)}
            className="px-3 py-2 ml-0 leading-tight rounded-full hover:bg-gray-100 dark:hover:text-white cursor-pointer"
          >
            {firstLabel}
          </div>
        </li>
        {pageDisplay
          .filter((idx) => idx <= pageCount)
          .map((idx) =>
            idx == currentPage ? (
              <li>
                <div
                  onClick={() => onPageClick(idx)}
                  className="px-3 py-2 leading-tight rounded-full bg-violet-100 cursor-pointer"
                >
                  {idx}
                </div>
              </li>
            ) : (
              <li>
                <div
                  onClick={() => onPageClick(idx)}
                  className="px-3 py-2 leading-tight rounded-full bg-white  hover:bg-gray-100 cursor-pointer"
                >
                  {idx}
                </div>
              </li>
            )
          )}
        <li>
          <div
            onClick={() => onPageClick(pageCount - 1)}
            className="px-3 py-2 leading-tight rounded-full hover:bg-gray-100 cursor-pointer"
          >
            {lastLabel}
          </div>
        </li>
      </ul>
    </nav>
  ); 
}
