"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentViewer = exports.DocumentRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageRenderer_1 = require("./renderers/ImageRenderer");
exports.DocumentRenderer = {
    png: ImageRenderer_1.ImageRenderer,
};
const DocumentViewer = ({ fileExt, fileName, fileUrl, docRenderer, }) => {
    const canPreview = () => {
        return Object.keys(docRenderer).includes(fileExt);
    };
    const DocumentViewer = docRenderer[fileExt];
    return !canPreview() ? null : ((0, jsx_runtime_1.jsx)(DocumentViewer, { fileUrl: fileUrl, fileName: fileName }));
};
exports.DocumentViewer = DocumentViewer;
