import React, {Component} from 'react';
import './Comments.css';
import CommentBar from "./CommentBar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@material-ui/core/ListItem';
import UserAvatar from 'react-user-avatar'
import {withStyles} from "@material-ui/core/styles/index";

const initialContainerStyle = {opacity: 1.0, pointerEvents: 'all'};

const styles = {
    root: {
        alignItems: "start",
        paddingTop: 6,
        paddingBottom: 6
    }
};

const mainColors = [
    '#E1BEE7',
    '#FFCDD2',
    '#F8BBD0',
    '#90CAF9',
    '#9FA8DA',
    '#B39DDB',
    '#DCEDC8',
    '#E6EE9C',
    '#81C784',
    '#FFF176',
    '#FFD54F',
    '#FFCC80',
    '#9E9E9E',
    '#E0E0E0',
    '#FFAB91',
    '#FF7043',
    '#B0BEC5',
];

class CommentNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBar: false,
            comment: this.initNewComment(this.props),
            containerStyle: initialContainerStyle
        };
    }

    componentWillReceiveProps(nextProps) {
        //Display bar
        const displayBar = nextProps.newCommentText !== '' && !!this.props.entityKeyCode;
        this.updateState(displayBar, this.initNewComment(nextProps), initialContainerStyle);
    }

    initNewComment = (props) => {
        return {
            entityCode: this.props.entityCode,
            entityKeyCode: this.props.entityKeyCode,
            text: props.newCommentText
        };
    };

    inputTextArea = (event) => {
        let element = event.target;
        const displayBar = element.value !== '' && !!this.props.entityKeyCode;
        //The text
        let comment = this.state.comment;
        comment.text = element.value;
        this.updateState(displayBar, comment);
        //Value
        this.props.updateNewCommentText(comment.text);
    };

    showUpdating = () => {
        this.setState(() => ({
            containerStyle: {opacity: 0.4, pointerEvents: 'none'}
        }));
    };

    updateState = (displayBar, comment, containerStyle) => {
        this.setState(() => ({
            displayBar,
            comment,
            containerStyle
        }));
    };

    render() {
        return (
            <ListItem classes={{root: this.props.classes.root}}>

                <UserAvatar size="48" name={this.props.userDesc} colors={mainColors}/>

                <div className="commentContainer" style={this.state.containerStyle}>

                    <div className="triangle"/>
                    <div className="innerTriangle"/>

                        {this.state.displayBar &&
                        <div className="commentInfoContainer">

                            <div style={{height: 20}}></div>

                            <CommentBar saveCommentHandler={this.props.createCommentHandler}
                                        displayBar={this.state.displayBar}
                                        comment={this.state.comment}
                                        displayClosingCheck={this.props.entityCode === 'EVNT'}
                                        showUpdatingHandler={this.showUpdating}/>
                        </div>}

                    <div className="commentTextContainer">
                        <TextareaAutosize placeholder="Enter new comment here"
                                          className="commentText" onInput={this.inputTextArea}
                                          value={this.props.newCommentText} onFocus={this.inputTextArea}/>
                    </div>

                </div>

            </ListItem>
        );
    }
}

export default withStyles(styles)(CommentNew)