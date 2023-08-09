import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import ReactMarkdown from "react-markdown";

const ReleaseNotes = (props) => {
  const { file } = props;
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    console.log("fileCOMP", file);
    fetch(file)
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((e) => console.log(e));
  });

  return (
    <div style={{ marginLeft: 20, height: "100%", overflow: "auto" }}>
      <InfiniteScroll dataLength={fileContent.length}>
        <ReactMarkdown>{fileContent}</ReactMarkdown>
      </InfiniteScroll>
    </div>
  );
};

export default ReleaseNotes;
