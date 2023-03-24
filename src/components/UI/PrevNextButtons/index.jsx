export function PrevNextButtons({ currentPage, maxPages, onPageChange }) {
    return (
        <>
            {currentPage > 1 && (
                <button
                    className="mx-2 bg-gray-200 hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Prev
                </button>
            )}
            {currentPage < maxPages && (
                <button
                    className="mx-2 bg-gray-200 hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            )}
        </>
    )
}