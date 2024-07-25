import React from 'react';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from 'mdi-material-ui/OpenInNew';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { Link } from 'react-router-dom';

const EAMLink = ({link, value}) => {

    let eamLink = null;
    let isExternalLink = null;
    if (link && link(value)) {
        isExternalLink = !link().startsWith('/');
        if (link().startsWith('http')) {
            eamLink = React.forwardRef((props, ref) => (
                <a href={link(value)} {...props} target="_blank" rel="noopener noreferrer" />
            ));
        } else {
            eamLink = React.forwardRef((props, ref) => <Link to={link(value)} {...props} />);
        }
    }

    return (<IconButton component={eamLink} disabled={!value}>
                {isExternalLink ? <OpenInNewIcon/> : <OpenInBrowserIcon/>}
            </IconButton>);
}


export default EAMLink;