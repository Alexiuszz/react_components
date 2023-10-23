import React from "react";
import { PageContainer } from "./page.styles";

function Page({ pageNum, content, pages }) {
        console.log('pages', pages, 'pageNUm', pageNum)
  return (
    <PageContainer $pages={pages} $pagenum={pageNum}>
      <div className="page-inner">
        {pageNum % 2 !== 0 && (
          <div className="page-number">
            {"" + pageNum + " " + (pageNum + 1)}
          </div>
        )}
        {pageNum !== 1 && pageNum % 2 !== 0 && (
          <div className="control">
            <label htmlFor={`${pageNum - 2}`}></label>
          </div>
        )}
        <div className="page-content">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>
        {pageNum !== pages && pageNum % 2 === 0 && (
          <div className="control next">
            <label htmlFor={`${pageNum}`}></label>
          </div>
        )}
      </div>
    </PageContainer>
  );
}

export default Page;
