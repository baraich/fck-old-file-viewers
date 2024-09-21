import React from "react";
import { ImageRenderer } from "./renderers/ImageRenderer";
import { VideoRenderer } from "./renderers/VideoRenderer";
import { PDFRenderer } from "./renderers/PDFRenderer";

export type IDocumentViewer = React.FC<{
  fileUrl: string;
  fileName: string;

  config: {
    props: any;
  };
}>;

type DocumentRenderer = Record<string, IDocumentViewer>;

export const DocumentRenderer = {
  png: ImageRenderer,
  jpg: ImageRenderer,
  jpeg: ImageRenderer,
  gif: ImageRenderer,
  svg: ImageRenderer,
  webp: ImageRenderer,
  bmp: ImageRenderer,
  ico: ImageRenderer,

  mp4: VideoRenderer,
  pdf: PDFRenderer,
} as const;

type DocumentViewerProps = {
  fileExt: string;
  fileUrl: string;
  fileName: string;
  config?: { props: any };
  docRenderer: DocumentRenderer;
};

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  config,
  fileExt,
  fileName,
  fileUrl,
  docRenderer,
}) => {
  const canPreview = (): boolean => {
    return Object.keys(docRenderer).includes(fileExt);
  };

  const DocumentViewer: IDocumentViewer = docRenderer[fileExt];

  return !canPreview() ? (
    <p style={{ textTransform: "capitalize" }}>
      no document viewer found for –{" "}
      <span style={{ fontWeight: "bold", textTransform: "lowercase" }}>
        .{fileExt}
      </span>
    </p>
  ) : (
    <DocumentViewer
      fileUrl={fileUrl}
      fileName={fileName}
      config={config ?? { props: {} }}
    />
  );
};
