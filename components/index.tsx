import React, { useRef, useState, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && editorRef.current) {
      const quillInstance = new Quill(editorRef.current as unknown as Element, {
        theme: "snow",
      });
      setQuill(quillInstance);
    }
  }, []);

  return (
    <div>
      {typeof window !== "undefined" && (
        <div ref={editorRef} style={{ height: "300px" }} />
      )}
    </div>
  );
};

export default RichTextEditor;
