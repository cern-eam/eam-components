import React from 'react';
import { useHistory } from "react-router";
/**
 * Use the 'customPrepend' and 'customAppend' props to add custom
 * content to the start and end of the base footer, respectively
 */
const Footer = (props) => {
    const { customPrepend, appName, version, supportEmail, customAppend } =
        props;

    const history = useHistory();

    return (
        <>
            {customPrepend}
            <b>{appName}</b>
            <span style={{marginLeft: 5, marginRight: 5}}>(<span style={{textDecorationLine: "underline", cursor: "pointer"}}  onClick={() => history.push("/releasenotes")}>v{version}</span>)</span>
            <a
                style={{ color: 'white', marginRight: 10 }}
                href={`mailto:${supportEmail}`}
            >
                {supportEmail}
            </a>
            {customAppend}
        </>
    );
};

export default Footer;