import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import ImageFilter from 'mdi-material-ui/ImageFilter'
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted'
import PlusBox from 'mdi-material-ui/PlusBox'

class EDMSWidgetToolbar extends Component {

    //
    // STYLES
    //
    mainDivStyle = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fafafa",
        height: 50,
        borderBottom: "1px solid rgb(238, 238, 238)"
    };

    separatorStyle = {
        flex: "1 1 auto"
    };

    computeDocumentCreationStyle = () => ({
        color: this.props.documentCreationVisible ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
    });

    computeGalleriaButtonStyle = () => ({
        color: this.props.currentView === 'GALLERIA' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
    });

    computeDoclistButtonStyle = () => ({
        color: this.props.currentView === 'DOCLIST' ? 'rgb(0, 170, 255)' : 'rgba(0, 0, 0, 0.54)'
    });

    render() {
        return (
            <div style={this.mainDivStyle}>

                {!this.props.documentCreationDisabled &&
                    <IconButton onClick={this.props.documentCreationHandler}
                                style={this.computeDocumentCreationStyle()}>
                        <PlusBox/>
                    </IconButton>}

                <div style={this.separatorStyle}/>
                <IconButton onClick={this.props.galleriaClickHandler}
                            style={this.computeGalleriaButtonStyle()}>
                <ImageFilter/>
                </IconButton>
                <IconButton onClick={this.props.doclistClickHandler}
                            style={this.computeDoclistButtonStyle()}>
                    <FormatListBulleted/>
                </IconButton>
            </div>
        )
    }
}

export default EDMSWidgetToolbar