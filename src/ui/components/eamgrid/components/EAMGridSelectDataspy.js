import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import FilterOutline from 'mdi-material-ui/FilterOutline';
import FilterRemoveOutline from 'mdi-material-ui/FilterRemoveOutline';

const styles = () => ({
    mainPanelStyle: {
        backgroundColor: '#fafafa',
        padding: '10px',
        border: '1px solid lightGray'
    },
    formStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    dataspyFormStyle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    fetchDataButton: {
        marginLeft: "10px",
        marginRight: "10px",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    },
    toggleFilterButton: {
        boxShadow: "none"
    },
    formItem: {
        marginLeft: "10px",
        marginRight: "10px",
        flex: "0 0 auto"
    },
    selectDataspyInput: {
        backgroundColor: 'white'
    },
    root: {
        margin: "0 auto",
        width: "100%"
    },
    '@media (max-width: 500px)' : {
        cleanFiltersButton: {
           display: "none"
        },
        dataspyLabel: {
            display: "none"
        }
    }
});

class DataGridSelectDataSpy extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.mainPanelStyle}>
                <form>
                    <FormControl className={classes.root}>
                        <div className={classes.formStyle}>
                            <div className={classes.dataspyFormStyle}>
                                <div className={classNames(classes.formItem, classes.dataspyLabel)}>
                                    Dataspy:
                                </div>
                                <Select className={classNames(classes.formItem, classes.selectDataspyInput)}
                                    value={this.props.dataSpy}
                                    onChange={this.props.handleChangeDataSpy}
                                    inputProps={{
                                        name: 'dataspy',
                                        id: 'dataspy-select',
                                    }}
                                >
                                    {
                                        this.props.listOfDataSpy && this.props.listOfDataSpy.map((dataspy) => {
                                            return <MenuItem key={dataspy.code} value={dataspy.code}>{dataspy.label}</MenuItem>
                                        })
                                    }
                                </Select>
                                <Button mini variant="fab"
                                        className={classNames(classes.formItem, classes.toggleFilterButton)}
                                        onClick = {this.props.toggleFilter}>
                                    { this.props.filterVisible ? <FilterRemoveOutline /> : <FilterOutline/> }
                                 </Button>
                                {this.props.filterVisible && (
                                <Button
                                    className={classes.cleanFiltersButton}
                                    onClick={this.props.clearFilters}>
                                    Clean filters
                                </Button>
                                )}
                            </div>
                            <Button mini variant="fab"
                                    color="primary"
                                    className={classes.fetchDataButton}
                                    onClick = {this.props.runSearch}>
                                <SearchIcon />
                            </Button>
                        </div>
                    </FormControl>
                </form>
        </div>
        );
    }
}

export default withStyles(styles)(DataGridSelectDataSpy);