import React from 'react';

/**
 * Use the 'customPrepend' and 'customAppend' props to add custom
 * content to the start and end of the base footer, respectively
 */
const Footer = (props) => {
    const { customPrepend, appName, version, supportEmail, customAppend } =
        props;

    return (
        <>
            {customPrepend}
            <b>{appName}</b> (v{version}){' '}
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
