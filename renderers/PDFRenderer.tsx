"use client";
import { IDocumentViewer } from "..";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export const PDFRenderer: IDocumentViewer = ({ fileUrl, config }) => {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100svh",
        display: "flex",
        background: "red",
        overflowX: "hidden",
        overflowY: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Document
        onLoadSuccess={(data) => {
          setNumPages(data.numPages);
        }}
        file={
          "https://cdn.api.baraich.cloud/1726908845Title_The Essential Role of Security Cameras in Enhancing Public Safety.pdf"
        }
      >
        {/* @ts-ignore */}
        {config.showAll ? (
          Array.from({ length: numPages }, (_, index) => (
            <Page key={index} pageIndex={index} />
          ))
        ) : (
          <Page pageIndex={0} />
        )}
      </Document>
    </div>
  );
};
