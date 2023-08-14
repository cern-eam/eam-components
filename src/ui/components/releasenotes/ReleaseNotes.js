import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactMarkdown from 'react-markdown';

const ReleaseNotes = (props) => {
    const { file } = props;
    const [fileContent, setFileContent] = useState('');
    const [errorWithFile, setErrorWithFile] = useState();

    useEffect(() => {
        fetch(file)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then((text) => setFileContent(text))
            .catch((error) => {
                setErrorWithFile(error);
            });
    }, []);

    return (
        <div style={{ marginLeft: 20, height: '100%', overflow: 'auto' }}>
            {errorWithFile ? (
                <p>The release notes could not be loaded.</p>
            ) : (
                <InfiniteScroll height="100%" dataLength={fileContent.length}>
                    <ReactMarkdown>{fileContent}</ReactMarkdown>
                </InfiniteScroll>
            )}
        </div>
    );
};

export default ReleaseNotes;
