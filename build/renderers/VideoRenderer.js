"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRenderer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const VideoRenderer = ({ fileUrl, fileName, config, }) => {
    var _a;
    const defaultStyles = { width: "100%", height: "100%", objectFit: "cover" };
    const styles = ((_a = config.props) === null || _a === void 0 ? void 0 : _a.styles) != undefined
        ? Object.assign(Object.assign({}, defaultStyles), config.props.styles) : defaultStyles;
    return ((0, jsx_runtime_1.jsx)("video", Object.assign({ controls: false, src: fileUrl }, config.props, { style: styles, children: fileName })));
};
exports.VideoRenderer = VideoRenderer;
