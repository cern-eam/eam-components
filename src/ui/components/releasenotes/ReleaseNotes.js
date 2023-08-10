import React, { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import ReactMarkdown from "react-markdown";

const ReleaseNotes = (props) => {
  const { file } = props;
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((e) => console.err(e));
  });

  return (
    <div style={{ marginLeft: 20, height: "100%", overflow: "auto" }}>
      <InfiniteScroll height="100%" dataLength={fileContent.length}>
        <ReactMarkdown>{fileContent}</ReactMarkdown>
      </InfiniteScroll>
    </div>
  );
};

export default ReleaseNotes;
