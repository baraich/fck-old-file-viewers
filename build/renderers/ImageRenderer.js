"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageRenderer = ({ fileUrl, fileName }) => ((0, jsx_runtime_1.jsx)("img", { src: fileUrl, alt: fileName }));
exports.ImageRenderer = ImageRenderer;
