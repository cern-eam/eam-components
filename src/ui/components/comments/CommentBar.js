import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import { FlagCheckered } from 'mdi-material-ui';

const notClosingButtonStyle = {
    backgroundColor: '#e0e0e0',
};

const saveIconStyle = {
    width: 16,
    height: 16,
    marginRight: 5,
};

class CommentBar extends Component {
    state = {
        isClosing: false,
        closingButtonStyle: notClosingButtonStyle,
    };

    barCommentSaveHandler = () => {
        //Show updating
        this.props.showUpdatingHandler();
        //Comment to be saved
        let comment = this.props.comment;
        //Set the closing
        if (this.state.isClosing) {
            comment.typeCode = '+';
        }
        //Update the closing
        this.setState(() => ({
            isClosing: false,
            closingButtonStyle: notClosingButtonStyle,
        }));
        //Save the comment with the method received
        this.props.saveCommentHandler(comment);
    };

    render() {
        if (this.props.displayBar) {
            return (
                <div className="commentBarContainer">
                    <Button disableElevation onClick={this.barCommentSaveHandler} color="primary">
                        <SaveIcon style={saveIconStyle} /> Save
                    </Button>

                    {this.props.displayClosingCheck && (
                        <FormControlLabel
                            style={{ height: 22, marginRight: -5 }}
                            control={
                                <Checkbox
                                    color="primary"
                                    icon={<FlagCheckered />}
                                    checkedIcon={<FlagCheckered />}
                                    checked={this.state.isClosing}
                                    onChange={(event, checked) => this.setState({ isClosing: checked })}
                                />
                            }
                        />
                    )}
                </div>
            );
        }
        return null;
    }
}

export default CommentBar;
