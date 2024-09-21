import React from "react";
export type IDocumentViewer = React.FC<{
    fileUrl: string;
    fileName: string;
    config: {
        props: any;
    };
}>;
type DocumentRenderer = Record<string, IDocumentViewer>;
export declare const DocumentRenderer: {
    readonly png: IDocumentViewer;
    readonly jpg: IDocumentViewer;
    readonly jpeg: IDocumentViewer;
    readonly gif: IDocumentViewer;
    readonly svg: IDocumentViewer;
    readonly webp: IDocumentViewer;
    readonly bmp: IDocumentViewer;
    readonly ico: IDocumentViewer;
    readonly mp4: IDocumentViewer;
    readonly pdf: IDocumentViewer;
};
type DocumentViewerProps = {
    fileExt: string;
    fileUrl: string;
    fileName: string;
    config?: {
        props: any;
    };
    docRenderer: DocumentRenderer;
};
export declare const DocumentViewer: React.FC<DocumentViewerProps>;
export {};
//# sourceMappingURL=index.d.ts.map