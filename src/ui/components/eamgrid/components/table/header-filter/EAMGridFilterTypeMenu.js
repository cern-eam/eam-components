import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from "@material-ui/core/styles/index";
import { Minus,
         RayStartArrow,
         RayEndArrow,
         RayVertex,
         CheckboxMarked,
         CodeGreaterThan,
         CodeGreaterThanOrEqual,
         CodeLessThan,
         CodeLessThanOrEqual,
         EqualBox,
         CodeNotEqual,
         CheckboxBlank,
         CheckboxBlankOutline,
         Rhombus,
         RhombusOutline } from 'mdi-material-ui';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = () => ({
    filterIconButton: {
        width: "25px",
        height: "25px",
        marginTop: "8px",
        fontSize: "16px",
        '&:hover': {
            color: "black",
            background: 'lightGray',
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
        }
    }
});

const ITEM_HEIGHT = 48;

const options = {
    VARCHAR: [
        {'value':'BEGINS','label':'Starts with', 'icon': <RayStartArrow/>},
        {'value':'CONTAINS','label':'Contains', 'icon': <RayVertex/>},
        {'value':'NOT_CONTAINS','label':'Does not contain', 'icon': <Minus/>},
        {'value':'ENDS','label':'Ends with', 'icon': <RayEndArrow/>},
        {'value':'EQUALS', 'label':'Equals', 'icon': <EqualBox/>},
        {'value':'NOT_EQUAL','label':'Does not equal', 'icon': <CodeNotEqual/>},
        {'value':'IS_EMPTY','label':'Is empty', 'icon': <RhombusOutline/>},
        {'value':'NOT_EMPTY','label':'Is not empty', 'icon': <Rhombus/>}
    ],
    DATE: [
        {'value':'GREATER_THAN','label':'Greater than', 'icon': <CodeGreaterThan/>},
        {'value':'EQUALS','label':'Equals', 'icon': <EqualBox/>},
        {'value':'LESS_THAN','label':'Less than', 'icon': <CodeLessThan/>},
        {'value':'LESS_THAN_EQUALS','label':'Less than or equals', 'icon': <CodeLessThanOrEqual/>},
        {'value':'GREATER_THAN_EQUALS','label':'Greater than or equals', 'icon': <CodeGreaterThanOrEqual/>},
        {'value':'IS_EMPTY','label':'Is empty', 'icon': <RhombusOutline/>},
        {'value':'NOT_EMPTY','label':'Is not empty', 'icon': <Rhombus/>},
        {'value':'NOT_EQUAL','label':'Does not equal', 'icon': <CodeNotEqual/>}
    ],
    NUMBER: [
        {'value':'EQUALS','label':'Equals', 'icon': <EqualBox/>},
        {'value':'LESS_THAN','label':'Less than', 'icon': <CodeLessThan/>},
        {'value':'GREATER_THAN','label':'Greater than', 'icon': <CodeGreaterThan/>},
        {'value':'LESS_THAN_EQUALS','label':'Less than or equals', 'icon': <CodeLessThanOrEqual/>},
        {'value':'GREATER_THAN_EQUALS','label':'Greater than or equals', 'icon': <CodeGreaterThanOrEqual/>},
        {'value':'IS_EMPTY','label':'Is empty', 'icon': <RhombusOutline/>},
        {'value':'NOT_EMPTY','label':'Is not empty', 'icon': <Rhombus/>},
        {'value':'NOT_EQUAL','label':'Does not equal', 'icon': <CodeNotEqual/>}
    ],
    CHKBOOLEAN: [
        {'value':'INDETERMINATE','label':'Indeterminate', 'icon': <CheckboxBlank/>},
        {'value':'SELECTED','label':'Selected', 'icon': <CheckboxMarked/>},
        {'value':'NOT_SELECTED','label':'Not selected', 'icon': <CheckboxBlankOutline/>}
    ]
}

const menuItems = ( dataType ) => {
    switch(dataType){
        case 'DATE':
            return options['DATE'];
        case 'DATETIME':
            return options['DATE'];
        case 'DECIMAL':
            return options['NUMBER'];
        case 'NUMBER':
            return options['NUMBER'];
        case 'CHKBOOLEAN':
            return options['CHKBOOLEAN'];
        default:
            options["VARCHAR"];
    }
    return options["VARCHAR"];
};

/**
 * Select allowing the user to choose between the different kinds of filters: starts with, contains,
 * does not contain, ends with, etc.
 */
class DataGridFilterTypeMenu extends React.Component {

    constructor(props) {
        super(props);

        // get the current operator
        const menuItem = menuItems(this.props.dataType).filter((op) => op.value === this.props.filter.operator);

        this.state = {
            anchorEl: null,
            option:  menuItem.length > 0 ? menuItem[0] : menuItems(this.props.dataType)[0]
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    onChange = (option) => {
        this.setState((prevState) => ({
            anchorEl: null,
            option: option ? option : prevState.option
        }), () => {
            this.props.onChange({
                fieldName: this.props.filter.fieldName,
                operator: this.state.option.value
            }, this.props.dataType);
        });
    };

    render() {
        const { classes, dataType = "VARCHAR" } = this.props;
        const { anchorEl } = this.state;

        return (
            <div style={{margin:'0 auto'}}>
                <IconButton
                    className={classes.filterIconButton}
                    aria-label="More"
                    aria-owns={anchorEl ? 'long-menu' : null}
                    onClick={this.handleClick}
                >
                    { this.state.option.icon }
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => this.onChange(undefined)}
                    PaperProps={{
                        style: {
                        }
                    }}
                >
                    {menuItems(dataType).map(option => (
                        <MenuItem key={option.value} selected={option === this.state.option} onClick={() => {this.onChange(option)}}>
                            <ListItemIcon>
                                {option.icon && option.icon}
                            </ListItemIcon>
                            <ListItemText inset primary={option.label} />
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(DataGridFilterTypeMenu);