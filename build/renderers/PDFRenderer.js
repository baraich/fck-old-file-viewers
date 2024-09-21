"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_pdf_1 = require("react-pdf");
const PDFRenderer = ({ fileUrl }) => {
    return (0, jsx_runtime_1.jsx)(react_pdf_1.Document, { file: { url: fileUrl } });
};
exports.PDFRenderer = PDFRenderer;
