import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import './EISTable.css';
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterList';
import PropTypes from 'prop-types';

const whiteBackground = {
    backgroundColor: "#ffffff"
};

const greyBackground = {
    backgroundColor: "#eeeeee"
};

/**
 * Receive as props:
 * data: Containing all the results from the server
 * headers: Headers to display
 * propCodes: Properties of the data to be displayed (In the desired order)
 * linksMap: Information of the columns that will be displayed as links
 */
class EISTable extends Component {

    state = {
        windowWidth: window.innerWidth,
        orderBy: -1,
        order: 'asc',
        data: []
    };

    filterSelectStyle = {
        fontSize: '0.8125rem'
    }

    componentWillMount() {
        window.addEventListener('resize', this.onWindowSizeChange);
        //Set the data
        this.setState(() => ({data: this.props.data}));
    }

    componentWillReceiveProps(nextProps) {
        //Set the data
        this.initialData = this.props.data;
        this.setState(() => ({data: nextProps.data}));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowSizeChange);
    }

    onWindowSizeChange = () => {
        this.setState(() => ({
            windowWidth: window.innerWidth
        }));
    };

    resetSort = () => {
        this.setState(() => ({
            orderBy: -1,
            order: 'asc',})
        )
    }
    createSortHandler = property => event => {
        this.handleRequestSort(event, property);
    };

    createSortHandlerMobile = (event) => {
        this.handleRequestSort(event, event.target.value);
    };

    handleRequestSort = (event, property) => {
        //By default asc
        let order = 'asc';
        //If negative, initial data
        if (property < 0) {
            this.setState(() => ({data: this.props.data, order, orderBy: property}));
            return;
        }

        let orderBy = property;
        if (property < this.props.propCodes.length) {
            if (this.state.orderBy === property && this.state.order === 'asc') {
                order = 'desc';
            }
        } else { /*It's desc*/
            orderBy = property - this.props.propCodes.length;
            order = 'desc';
        }
        //Property Code
        const propCode = this.props.propCodes[orderBy];
        //Perform sorting
        const data =
            order === 'desc'
                ? [...this.state.data].sort((a, b) => (this.getCompValue(b[propCode]) < this.getCompValue(a[propCode]) ? -1 : 1))
                : [...this.state.data].sort((a, b) => (this.getCompValue(a[propCode]) < this.getCompValue(b[propCode]) ? -1 : 1));

        //Assign final data
        this.setState(() => ({data, order, orderBy: property}));
    };

    getCompValue = (value) => {
        if (!isNaN(value)) {
            return +value;
        }
        //Default case
        return value;
    };

    renderContent = (propCode, content) => {
        //Normal content
        if (!this.props.linksMap.get(propCode)) {
            if (content[propCode] === 'true' || content[propCode] === 'false') {
                //Checkbox
                return <Checkbox checked={content[propCode] === 'true'}
                                 value={content[propCode]}
                                 disabled={true}/>
            }
            return (content[propCode]);
        }

        //Link
        if (this.props.linksMap.get(propCode)['linkType'] === 'fixed') {
            const linkValue = process.env.REACT_APP_FRONTEND + this.props.linksMap.get(propCode)['linkValue'];
            return (<Link
                to={{pathname: linkValue + content[propCode]}}>{content[propCode]}</Link>);
        } else {
            if (this.props.linksMap.get(propCode)['linkType'] === 'absolute') {
                const linkValue = this.props.linksMap.get(propCode)['linkValue'];
                return (<a href={linkValue + content[propCode]} target="_blank">{content[propCode]}</a>);
            } else {/*Dynamic link*/
                const linkValue = process.env.REACT_APP_FRONTEND + content[this.props.linksMap.get(propCode)['linkValue']];
                return (<Link
                    to={{pathname: linkValue}}>{content[propCode]}</Link>);
            }
        }

    };

    renderSortByValuesMobile = () => {
        // Create list of values
        let listValues = this.props.headers.map(elem => `${elem} (Asc)`);
        listValues = listValues.concat(this.props.headers.map(elem => `${elem} (Desc)`));

        return (
            <Select
                native
                value={this.state.orderBy}
                onChange={this.createSortHandlerMobile} className="eamTableDropdown">
                <option value={-1}>Select sort column...</option>
                {
                    listValues.map((elem, index) => <option key={index} value={index}>{elem}</option>)
                }
            </Select>
        );
    };

    propagateFilterChange = (e) => {
        this.resetSort();
        this.props.handleFilterChange(e.target.value);
    }

    renderFilterByValuesMobile = () => {
        return (
            <Select
                native
                value={this.props.activeFilter}
                onChange={this.propagateFilterChange}
                className="eamTableDropdown">
                {
                    Object.keys(this.props.filters).map((key) => <option key={key} value={key}>{this.props.filters[key].text}</option>)
                }
            </Select>
        );
    }

    render() {
        const isMobile = this.state.windowWidth < this.props.maxMobileSize;
        const rowsSelectable = this.props.selectedRowIndexes && this.props.onRowClick;

        if (isMobile) {
            return (
                <Table className="responsiveTable" style={{overflow:'visible'}}>
                    <TableHead>
                        {this.props.filters && Object.keys(this.props.filters).length &&
                        <TableRow>
                            <TableCell>Filter by:</TableCell>
                            <TableCell>{this.renderFilterByValuesMobile()}</TableCell>
                        </TableRow>
                        }
                        <TableRow>
                            <TableCell>Sort by:</TableCell>
                            <TableCell>{this.renderSortByValuesMobile()}</TableCell>
                        </TableRow>
                    </TableHead>
                    {this.state.data.map((content, index) => {
                        // every second row is grey
                        let style = index % 2 === 0 ? whiteBackground : greyBackground;

                        if (this.props.selectedRowIndexes && this.props.selectedRowIndexes.includes(index)) {
                            style = {
                                ...style,
                                backgroundColor: "#2b82ff",
                            }
                        }

                        if (rowsSelectable) {
                            style = {
                                ...style,
                                cursor: "pointer"
                            }
                        }

                        /**
                         * A prop called stylesMap is used to customize the table
                         * If items with the property "full" have to be marked red,
                         * pass the folowing:
                         * stylesMap={{
                         *      full: {
                         *          backgroundColor: "red"
                         *      }
                         * }}
                         */
                        if (this.props.stylesMap) {
                            Object.keys(this.props.stylesMap)
                                .forEach(key => {
                                    if (content[key]) {
                                        style = {
                                            ...style,
                                            ...this.props.stylesMap[key]
                                        }
                                    }
                                })
                        }

                        return (
                            <TableBody key={index} style={style} onClick={rowsSelectable ? () => this.props.onRowClick(content, index) : () => {}}>
                                {
                                    this.props.propCodes.map((prop, index) =>
                                        <TableRow key={prop} style={style}>
                                            <TableCell>{this.props.headers[index]}</TableCell>
                                            <TableCell>{
                                                this.renderContent(prop, content)
                                            }</TableCell>
                                        </TableRow>
                                    )
                                }
                            </TableBody>
                        );
                    })}
                </Table>
            );
        } else {
            return (
                <React.Fragment>
                    {this.props.filters && Object.keys(this.props.filters).length &&

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FilterListIcon style={{ marginLeft: 'auto' }}/>
                        <Select
                        style={this.filterSelectStyle}
                        value={this.props.filters[this.props.activeFilter].text}
                        onChange={this.propagateFilterChange}
                        renderValue={value => <span>{value}</span>}>
                                {Object.keys(this.props.filters).map((key) => (
                                    <MenuItem key={key} value={key}>{this.props.filters[key].text}</MenuItem>
                                    ))}
                            </Select>
                    </div>
                    }
                    <Table className="responsiveTable" style={{overflow:'visible'}}>
                        <TableHead>
                            <TableRow>
                                {this.props.headers.map((header, index) => (
                                    <TableCell key={header}
                                                sortDirection={this.state.orderBy === index ? this.state.order : false}>
                                            <Tooltip
                                                title="Sort"
                                                placement={'bottom-end'}
                                                enterDelay={300}>
                                                <TableSortLabel
                                                    active={this.state.orderBy === index}
                                                    direction={this.state.order}
                                                    onClick={this.createSortHandler(index)}>
                                                    {header}
                                                </TableSortLabel>
                                            </Tooltip>
                                        </TableCell>
                                    )
                                    )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((content, index) => {
                                let style = {};
                                
                                if (this.props.selectedRowIndexes && this.props.selectedRowIndexes.includes(index)) {
                                    style = {
                                        ...style,
                                        backgroundColor: "#2196f3",
                                    }
                                }
                                
                                if (rowsSelectable) {
                                    style = {
                                        ...style,
                                        cursor: "pointer"
                                    }
                                }
                                
                                if (this.props.stylesMap) {
                                    Object.keys(this.props.stylesMap)
                                    .forEach(key => {
                                        if(content[key]) {
                                            style = {
                                                ...style,
                                                ...this.props.stylesMap[key]
                                            }
                                        }
                                    })
                                }
                                
                                return (
                                    <TableRow key={index} style={style} onClick={rowsSelectable ? () => this.props.onRowClick(content, index) : () => {}}>
                                        {this.props.propCodes.map(propCode =>
                                            <TableCell key={propCode}>{
                                                this.renderContent(propCode, content)
                                            }</TableCell>
                                            )}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </React.Fragment>
            );
        }
    }
}

EISTable.propTypes = {
    linksMap: PropTypes.instanceOf(Map),
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    propCodes: PropTypes.array.isRequired,
    selectedRowIndexes: PropTypes.array,
    onRowClick: PropTypes.func,
    stylesMap: PropTypes.object
};

EISTable.defaultProps = {
    linksMap: new Map(),
    maxMobileSize: 540
};


export default EISTable;