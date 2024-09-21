"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_pdf_1 = require("react-pdf");
require("react-pdf/dist/esm/Page/TextLayer.css");
require("react-pdf/dist/esm/Page/AnnotationLayer.css");
const react_1 = require("react");
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${react_pdf_1.pdfjs.version}/pdf.worker.min.mjs`;
const PDFRenderer = ({ fileUrl, config }) => {
    const [numPages, setNumPages] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "100%",
            maxHeight: "100svh",
            display: "flex",
            background: "red",
            overflowX: "hidden",
            overflowY: "auto",
            alignItems: "center",
            justifyContent: "center",
        }, children: (0, jsx_runtime_1.jsx)(react_pdf_1.Document, { onLoadSuccess: (data) => {
                setNumPages(data.numPages);
            }, file: "https://cdn.api.baraich.cloud/1726908845Title_The Essential Role of Security Cameras in Enhancing Public Safety.pdf", children: config.showAll ? (Array.from({ length: numPages }, (_, index) => ((0, jsx_runtime_1.jsx)(react_pdf_1.Page, { pageIndex: index }, index)))) : ((0, jsx_runtime_1.jsx)(react_pdf_1.Page, { pageIndex: 0 })) }) }));
};
exports.PDFRenderer = PDFRenderer;
