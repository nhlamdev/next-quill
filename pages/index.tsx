import dynamic from "next/dynamic";
import React from "react";
const RichTextEditor = dynamic(() => import("@/components"), {
  ssr: false,
});
const HomePage: React.FC = () => {
  return (
    <div>
      <RichTextEditor />
    </div>
  );
};

export default HomePage;
