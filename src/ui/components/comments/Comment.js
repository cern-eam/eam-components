import React, {Component} from 'react';
import './Comments.css';
import CommentUser from "./CommentUser";
import CommentBar from "./CommentBar";
import TextareaAutosize from 'react-autosize-textarea';
import ListItem from '@material-ui/core/ListItem';
import UserAvatar from 'react-user-avatar'
import { withStyles } from '@material-ui/core/styles';
import {FlagCheckered, PlusBoxOutline, Pencil} from 'mdi-material-ui';

import CKEditor from '@ckeditor/ckeditor5-react';

import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import sanitizeHtml from 'sanitize-html';


const iconStyle = {height: 15};
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
        const { allowHtml } = this.props;
        const { comment } = this.state;

        let a = allowHtml && comment && comment.text 
            && comment.text.startsWith("<html>") 
            && comment.text.endsWith("</html>")


        return (
            <ListItem classes={{root: this.props.classes.root}}>
                <UserAvatar size="48" name={comment.creationUserDesc} colors={mainColors}/>

                <div className="commentContainer" style={this.state.containerStyle}>

                    <div className="triangle"/>
                    <div className="innerTriangle"/>

                        <div className="commentInfoContainer">

                            <div>
                                <CommentUser userDesc={comment.creationUserDesc}
                                             userDate={comment.creationDate}
                                             icon={<PlusBoxOutline style={iconStyle}/>}
                                />
                                {this.props.comment.updateUserCode &&
                                <CommentUser userDesc={comment.updateUserDesc}
                                             userDate={comment.updateDate}
                                             icon={<Pencil style={iconStyle}/>}
                                />}
                            </div>

                            <div style={{display: "flex", alignItems: "center", height: 25, marginRight: 7}}>
                                <CommentBar saveCommentHandler={this.props.updateCommentHandler}
                                            displayBar={this.state.displayBar} comment={comment}
                                            displayClosingCheck={false} showUpdatingHandler={this.showUpdating}/>

                                {this.props.comment.typeCode === '+' && <FlagCheckered color="primary"/>}
                            </div>
                        </div>


                    <div className="commentTextContainer" onKeyDown={this.onKeyDownHandler}>
                        {(allowHtml && comment && comment.text && comment.text.startsWith("<html>") && comment.text.endsWith("</html>")) ?
                            <div style={{width: '100%', overflow: 'hidden'}}>
                                <CKEditor 
                                    //style={{height: '400px'}}
                                    onInit={ editor => { console.log( 'Editor is ready to use!', editor) }}
                                    //onChange={ ( event, editor ) => {1} }
                                    // config={ {
                                    //     // plugins: [ Essentials, Paragraph, Bold, Italic, Heading ],
                                    //     // toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ],
                                    //         width: '500',
                                    //     height: '100%'
                                    //     // ,
                                    //     // extraPlugins: 'autogrow',
                                    //     // autoGrow_minHeight: 250,
                                    //     // autoGrow_maxHeight: 600
                                    //     , balloonToolbar: [ 'bold', 'italic', '|', 'undo', 'redo' ]
                                    // } }
                                    editor={ BalloonEditor }
                                    data={this.sanitizeText(comment.text)}
                                />       
                            </div>
                            :  <TextareaAutosize 
                                    defaultValue={comment.text} 
                                    className="commentText"
                                    onInput={this.inputTextArea}
                            />
                            
                        }
                    </div>

                </div>


            </ListItem>
        );
    }

    sanitizeText = (text) =>        
        sanitizeHtml(text, {
            allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
                'nl', 'li', 'b', 'i', 'u', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
                'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'font', 'span'
            ],
            allowedAttributes: {
                font: [ 'color',  'style'],
                div: ['style'],
                span: ['style']
            }
        })
}




export default withStyles(styles)(Comment)