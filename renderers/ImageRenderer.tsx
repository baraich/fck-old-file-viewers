import { IDocumentViewer } from "..";

export const ImageRenderer: IDocumentViewer = ({ fileUrl, fileName }) => (
  <img src={fileUrl} alt={fileName} />
);
