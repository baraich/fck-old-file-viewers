"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentViewer = exports.DocumentRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageRenderer_1 = require("./renderers/ImageRenderer");
const VideoRenderer_1 = require("./renderers/VideoRenderer");
const PDFRenderer_1 = require("./renderers/PDFRenderer");
exports.DocumentRenderer = {
    png: ImageRenderer_1.ImageRenderer,
    jpg: ImageRenderer_1.ImageRenderer,
    jpeg: ImageRenderer_1.ImageRenderer,
    gif: ImageRenderer_1.ImageRenderer,
    svg: ImageRenderer_1.ImageRenderer,
    webp: ImageRenderer_1.ImageRenderer,
    bmp: ImageRenderer_1.ImageRenderer,
    ico: ImageRenderer_1.ImageRenderer,
    mp4: VideoRenderer_1.VideoRenderer,
    pdf: PDFRenderer_1.PDFRenderer,
};
const DocumentViewer = ({ config, fileExt, fileName, fileUrl, docRenderer, }) => {
    const canPreview = () => {
        return Object.keys(docRenderer).includes(fileExt);
    };
    const DocumentViewer = docRenderer[fileExt];
    return !canPreview() ? ((0, jsx_runtime_1.jsxs)("p", { style: { textTransform: "capitalize" }, children: ["no document viewer found for \u2013", " ", (0, jsx_runtime_1.jsxs)("span", { style: { fontWeight: "bold", textTransform: "lowercase" }, children: [".", fileExt] })] })) : ((0, jsx_runtime_1.jsx)(DocumentViewer, { fileUrl: fileUrl, fileName: fileName, config: config !== null && config !== void 0 ? config : { props: {} } }));
};
exports.DocumentViewer = DocumentViewer;
