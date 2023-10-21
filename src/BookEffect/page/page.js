import React from "react";
import { PageContainer } from "./page.styles";

function Page({ pageNum, content, pages }) {
  return (
    <PageContainer className={"page"} pages={pages} pagenum={pageNum}>
      <div className="page-inner">
        {pageNum % 2 !== 0 && (
          <div className="page-number">
            {"" + pageNum + " " + (pageNum + 1)}
          </div>
        )}
        {pageNum !== 1 && pageNum % 2 !== 0 && (
          <div class="control"></div>
        )}
        <div className="page-content">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>
        {pageNum !== pages && pageNum % 2 === 0 && (
          <div class="control next"></div>
        )}
      </div>
    </PageContainer>
  );
}

export default Page;
