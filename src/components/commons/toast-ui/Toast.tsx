import "@toast-ui/editor/dist/toastui-editor.css";

import { LegacyRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import { EditorType } from "@toast-ui/editor";

export default function ToastEditor(props: {
  defaultValue: string;
  onChangeContent: (editorType: EditorType) => void;
  editorRef: LegacyRef<Editor>;
}) {
  return (
    <Editor
      initialValue={props.defaultValue}
      previewStyle="vertical"
      height="500px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={props.editorRef}
      onChange={props.onChangeContent}
    />
  );
}
