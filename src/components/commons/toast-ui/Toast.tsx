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
      initialValue="내용을 입력하세요."
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={props.editorRef}
    />
  );
}
