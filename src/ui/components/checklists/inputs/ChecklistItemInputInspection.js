import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ChecklistItemInputInspection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    componentWillMount() {
        if (this.props.checklistItem) {
            this.setState({
                value: this.props.checklistItem.result
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checklistItem) {
            this.setState({
                value: nextProps.checklistItem.result
            })
        }
    }

    mainStyle = {
        flex: "0 0 170px",
        display: "flex",
        position: "relative",
        marginLeft: 10,
        flexDirection: "column"
    }

    inputStyle = {
        width: "1%",
        flex: "1 1 auto",
        border: "1px solid #ced4da",
        padding: "5px 10px",
        fontSize: 16,
        transition: "border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: 4,
        backgroundColor: "#fff",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        zIndex: 20
    }

    labelUOMStyle = {
        color: "black",
        fontSize: 15,
        color: "#495057",
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#e9ecef",
        border: "1px solid #ced4da",
        paddingLeft: 4,
        paddingRight: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        marginLeft: -1,
        zIndex: 10,
        display: "flex",
        alignItems: "center"
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleBlur = event => {
        this.props.onChange({
            ...this.props.checklistItem,
            result: event.target.value
        })
    }


    handleSelectChange = (event) => {
        this.props.onChange({
            ...this.props.checklistItem,
            finding: event.target.value
        })
    }

    render() {
        let {checklistItem} = this.props;

        return (
            <div style={this.mainStyle}>
                <div style={{marginBottom: 10, width: "100%", display: "flex"}}>
                    <input style={this.inputStyle} onChange={this.handleChange} value={this.state.value || ''}
                           onBlur={this.handleBlur}/>
                    <label style={this.labelUOMStyle}>{checklistItem.UOM}</label>
                </div>

                <FormControl style={this.selectStyle}>
                    <Select disableUnderline={true}
                            value={checklistItem.finding || ''}
                            onChange={this.handleSelectChange.bind(this)}
                    >
                        <MenuItem value={null}></MenuItem>
                        {checklistItem.possibleFindings.map(finding => (
                            <MenuItem key={finding.code} value={finding.code}>{finding.desc}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        )
    }
}