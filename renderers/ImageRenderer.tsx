export const ImageRenderer: React.FC<{ fileUrl: string; fileName: string }> = ({
  fileUrl,
  fileName,
}) => <img src={fileUrl} alt={fileName} />;
