import { Document } from "react-pdf";
import { IDocumentViewer } from "..";

export const PDFRenderer: IDocumentViewer = ({ fileUrl }) => {
  return <Document file={{ url: fileUrl }} />;
};
