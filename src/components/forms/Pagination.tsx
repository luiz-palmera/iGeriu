import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                onClick={() => currentPage > 1 && onPageChange(currentPage - 5)}
                disabled={currentPage === 1}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronDoubleLeftIcon className="w-4 h-4"/>
            </button>
            <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <ChevronLeftIcon className="w-4 h-4"/>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded-lg border text-sm transition
                ${
                    currentPage === page
                    ? "bg-background border-text text-text"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
                {page}
            </button>
            ))}
            <button
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRightIcon className="w-4 h-4"/>
            </button>
            <button
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 5)}
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronDoubleRightIcon className="w-4 h-4"/>
            </button>
        </div>
    );
}