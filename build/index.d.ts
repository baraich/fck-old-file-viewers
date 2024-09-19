import React from "react";
type IDocumentViewer = React.FC<{
    fileUrl: string;
    fileName: string;
}>;
type DocumentRenderer = Record<string, IDocumentViewer>;
export declare const DocumentRenderer: {
    readonly png: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
};
type DocumentViewerProps = {
    fileExt: string;
    fileUrl: string;
    fileName: string;
    docRenderer: DocumentRenderer;
};
export declare const DocumentViewer: React.FC<DocumentViewerProps>;
export {};
//# sourceMappingURL=index.d.ts.map