import React, {Component} from 'react';
import './Comments.css';
import CommentUser from "./CommentUser";
import CommentBar from "./CommentBar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@material-ui/core/ListItem';
import UserAvatar from 'react-user-avatar'
import { withStyles } from '@material-ui/core/styles';
import {FlagCheckered, PlusBoxOutline, Pencil} from 'mdi-material-ui';

const iconStyle = {height: 17};
const initialContainerStyle = {opacity: 1.0, pointerEvents: 'all'};

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

const styles = {
    root: {
        alignItems: "start",
        paddingTop: 6,
        paddingBottom: 6
    }
};

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.comment.text,
            displayBar: false,
            comment: this.props.comment,
            containerStyle: initialContainerStyle
        };
    }

    componentWillReceiveProps(nextProps) {
        this.updateState(nextProps.comment.text, false, nextProps.comment, initialContainerStyle);
    }

    inputTextArea = (event) => {
        let element = event.target;
        //Calculate display bar
        const initialText = this.state.text;
        const displayBar = element.value !== '' && initialText !== element.value;
        //The text
        let comment = this.state.comment;
        comment.text = element.value;
        this.updateState(initialText, displayBar, comment, initialContainerStyle);
    };

    showUpdating = () => {
        this.setState(() =>
            ({containerStyle: {opacity: 0.4, pointerEvents: 'none'}})
        );
    };

    updateState = (text, displayBar, comment, containerStyle) => {
        this.setState(() => ({
                text: text,
                displayBar: displayBar,
                comment: comment,
                containerStyle: containerStyle
            }
        ));
    };

    onKeyDownHandler = (event) => {
        if (event.keyCode === 13 || event.keyCode === 121) {
            event.stopPropagation();
        }
    }

    render() {
        return (
            <ListItem classes={{root: this.props.classes.root}}>

                <UserAvatar size="48" name={this.state.comment.creationUserDesc} colors={mainColors}/>

                <div className="commentContainer" style={this.state.containerStyle}>

                    <div className="triangle"/>
                    <div className="innerTriangle"/>

                        <div className="commentInfoContainer">

                            <div>
                                <CommentUser userDesc={this.state.comment.creationUserDesc}
                                             userDate={this.state.comment.creationDate}
                                             icon={<PlusBoxOutline style={iconStyle}/>}
                                />
                                {this.props.comment.updateUserCode &&
                                <CommentUser userDesc={this.state.comment.updateUserDesc}
                                             userDate={this.state.comment.updateDate}
                                             icon={<Pencil style={iconStyle}/>}
                                />}
                            </div>

                            <div style={{display: "flex", alignItems: "center", height: 25, marginRight: 7}}>
                                <CommentBar saveCommentHandler={this.props.updateCommentHandler}
                                            displayBar={this.state.displayBar} comment={this.state.comment}
                                            displayClosingCheck={false} showUpdatingHandler={this.showUpdating}/>

                                {this.props.comment.typeCode === '+' && <FlagCheckered color="primary"/>}
                            </div>
                        </div>


                    <div className="commentTextContainer" onKeyDown={this.onKeyDownHandler}>
                        <TextareaAutosize defaultValue={this.state.comment.text} className="commentText"
                                          onInput={this.inputTextArea}/>

                    </div>

                </div>


            </ListItem>
        );
    }
}

export default withStyles(styles)(Comment)