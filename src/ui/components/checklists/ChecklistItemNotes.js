import React, {Component} from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import TextField from '../inputs-ng/components/TextField';

export default class ChecklistItemNotes extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentWillMount() {
        if (this.props.checklistItem) {
            this.setState({
                value: this.props.checklistItem.notes
            })
        }
    }

    mainDivStyle = {
        flex: " 1 1 auto",
        position: "relative"
    }

    inputStyle = {
        padding: "7px 35px"
    }

    commentIconStyle = {
        position: "absolute",
        bottom: 7,
        left: 6,
        color: "#cecece"
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleBlur = event => {
        const oldValue = this.props.checklistItem.notes;
        if((oldValue === null ? '' : oldValue) === event.target.value) {
            return;
        }

        this.props.onChange({
            ...this.props.checklistItem,
            notes: event.target.value
        })
    }

    focus() {
        this.input.current.focus();
    }

    render() {
        return (
            <div style={this.mainDivStyle}>
                <TextField 
                    inputProps = {{
                        style: this.inputStyle,
                        onChange: this.handleChange,
                        value: this.state.value || '',
                        onBlur: this.handleBlur,
                        ref: this.input
                    }}
                />
                <CommentIcon style={this.commentIconStyle}/>
            </div>
        )
    }

}

