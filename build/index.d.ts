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
    readonly png: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly jpg: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly jpeg: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly gif: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly svg: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly webp: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly bmp: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly ico: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
    readonly mp4: React.FC<{
        fileUrl: string;
        fileName: string;
    }>;
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