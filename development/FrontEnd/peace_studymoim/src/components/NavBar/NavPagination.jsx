import {useEffect, useState} from "react";


export default function NavPagination({breakLabel,
                                       firstLabel,
                                       onPageChange,
                                       pageRangeDisplayed,
                                       pageCount,
                                       lastLabel}) {
    const [pageDisplay, setPageDisplay] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        computePageDisplay()
    }, [currentPage])
    function onPageClick(idx) {
        setCurrentPage(idx)
        onPageChange(idx)
        computePageDisplay()
    }
  
    function computePageDisplay() {
        let newDisplay = []
        if(pageRangeDisplayed/2 > (currentPage)) {
            for (let i = 0; i < pageRangeDisplayed; i++) {
                newDisplay.push(i+1);
            }
        } else if(pageCount-pageRangeDisplayed/2 < (currentPage)) {
            for (let i = pageCount-pageRangeDisplayed; i < pageCount; i++) {
                newDisplay.push(i+1);
            }
        } else {
            for (let i = Math.floor(currentPage-pageRangeDisplayed/2); i < Math.floor(currentPage+pageRangeDisplayed/2); i++) {
                newDisplay.push(i+1);
            }
        }
        setPageDisplay(newDisplay)
    }

    return(
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                <li>
                    <div onClick={() => onPageClick(1)}
                        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {firstLabel}
                    </div>
                </li>
                {pageDisplay.filter((idx) => idx<=pageCount).map((idx) => (
                    idx==currentPage ? (<li>
                        <div onClick={() => onPageClick(idx)}
                            className="px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                            {idx}
                        </div>
                    </li>) : (<li>
                        <div onClick={() => onPageClick(idx)}
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {idx}
                        </div>
                    </li>)
                ))}
                <li>
                    <div onClick={() => onPageClick(pageCount)}
                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {lastLabel}
                    </div>
                </li>
            </ul>
        </nav>
    )
}