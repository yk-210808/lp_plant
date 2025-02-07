import React from "react";
import Link from "next/link";

type Props = {
  currentPage: number; // 現在表示するページ番号
  limit: number; // 一件あたりに表示する件数
  count: number; // 全件数
  path: string; // ページネーションを呼び出すページパス
};

export const Pagination = ({ currentPage, limit, count, path }: Props) => {
  const totalPages = Math.ceil(count / limit);
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  } else if (currentPage >= totalPages - 2) {
    startPage = totalPages - 4;
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="c-pagination">
      <Link href={`${path}?p=${currentPage - 1}`} aria-label="Previous Page" className={`arrow prev ${currentPage === 1 ? 'disabled' : ''}`}>
        <span className={`${currentPage === 1 || count < limit ? "cursor-not-allowed" : ""}`} />
      </Link>
      {pageNumbers.map((number) => (
        <Link key={number} href={`${path}?p=${number}`} className={`num ${currentPage === number ? "current" : ""}`}>
          {number}
        </Link>
      ))}
      <Link href={`${path}?p=${currentPage + 1}`} aria-label="Next Page" className={`arrow next ${currentPage === totalPages ? 'disabled' : ''}`}>
        <span className={`${currentPage === totalPages || count < limit ? "cursor-not-allowed" : ""}`} />
      </Link>
    </div>
  );
};
