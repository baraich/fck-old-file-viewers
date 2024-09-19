# F(U)CK OLD FILE VIEWERS

This package is born solely out of frustration and aims to solve the problems of existing file viewers for _react_.

# How to fck other packages.

```ts
import { DocumentViewer } from "fck-old-file-viewers";
import { DocumentRenderer } from "fck-old-file-viewers/renderer";

export default function YourComponent() {
  return (
    <DocumentViewer
      fileExt="png"
      fileName="Fcked-Y'all-file-viewers.png" // ?String
      fileUrl="https://picsum.photos/300/300" // ?String – Public URL.
      docRenderer={DocumentRenderer} // ?Array
    />
  );
}
```
