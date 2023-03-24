export function PaginationButtons({ currentPage, maxPages, onPageChange }) {
    let buttonsToShow = []
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 0 && i <= maxPages) {
            buttonsToShow.push(i)
        }
    }

    return (
        <>
            {buttonsToShow.map((i) => (
                <button
                    key={i}
                    className={`mx-2 ${
                        currentPage === i ? "text-white bg-primary" : "bg-gray-200"
                    } hover:bg-primary_dark hover:text-white py-1 px-3 rounded-full`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            ))}
        </>
    )
}