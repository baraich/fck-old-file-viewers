import { IDocumentViewer } from "..";

export const VideoRenderer: IDocumentViewer = ({
  fileUrl,
  fileName,
  config,
}) => {
  const defaultStyles = { width: "100%", height: "100%", objectFit: "cover" };
  const styles =
    config.props?.styles != undefined
      ? { ...defaultStyles, ...config.props.styles }
      : defaultStyles;

  return (
    <video controls={false} src={fileUrl} {...config.props} style={styles}>
      {fileName}
    </video>
  );
};
