import React from "react";
import { ImageRenderer } from "./renderers/ImageRenderer";

type IDocumentViewer = React.FC<{
  fileUrl: string;
  fileName: string;
}>;

type DocumentRenderer = Record<string, IDocumentViewer>;

export const DocumentRenderer = {
  png: ImageRenderer,
} as const;

type DocumentViewerProps = {
  fileExt: string;
  fileUrl: string;
  fileName: string;
  docRenderer: DocumentRenderer;
};

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  fileExt,
  fileName,
  fileUrl,
  docRenderer,
}) => {
  const canPreview = (): boolean => {
    return Object.keys(docRenderer).includes(fileExt);
  };

  const DocumentViewer: IDocumentViewer = docRenderer[fileExt];

  return !canPreview() ? null : (
    <DocumentViewer fileUrl={fileUrl} fileName={fileName} />
  );
};
