import React, {Component} from 'react';
import CommentIcon from '@material-ui/icons/Comment';

export default class ChecklistItemInputQuantitative extends Component {

    componentWillMount() {
        if (this.props.checklistItem) {
            this.setState({
                value: this.props.checklistItem.notes
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checklistItem) {
            this.setState({
                value: nextProps.checklistItem.notes
            })
        }
    }

    notesStyle = {
        color: "rgb(117, 117, 117)",
        width: "calc(100% - 64px)",
        border: "0px solid #ebebeb",
        padding: "7px 29px",
        fontSize: 14,
        transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: 4,
        backgroundColor: "#fff"
    }

    commentIconStyle = {
        position: "absolute",
        bottom: 5,
        left: 4,
        color: "#cecece"
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }


    handleBlur = event => {
        this.props.onChange({
            ...this.props.checklistItem,
            notes: event.target.value
        })
    }

    render() {

        return (
            <div style={{padding: 2}}>
                <input style={this.notesStyle}
                       onChange={this.handleChange}
                       value={this.state.value || ''}
                       onBlur={this.handleBlur}/>
                <CommentIcon style={this.commentIconStyle}/>
            </div>
        )
    }

}

