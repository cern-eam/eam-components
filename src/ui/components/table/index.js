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
import Constants from '../../../enums/Constants';

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
        order: Constants.SORT_ASC,
        data: []
    };

    filterSelectStyle = {
        fontSize: '0.8125rem'
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowSizeChange);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.data) {
            return {
                ...state,
                data: props.data
            }
        }
        return null;
    }

    onWindowSizeChange = () => {
        this.setState(() => ({
            windowWidth: window.innerWidth
        }));
    };

    resetSort = () => {
        this.setState(() => ({
            orderBy: -1,
            order: Constants.SORT_ASC
        }))
    }
    createSortHandler = property => event => {
        this.handleRequestSort(event, property);
    };

    createSortHandlerMobile = (event) => {
        this.handleRequestSort(event, event.target.value);
    };

    handleRequestSort = (event, property) => {
        //By default asc
        let order = Constants.SORT_ASC;
        if (property >= 0 && property < this.props.propCodes.length) {
            if (this.state.orderBy === property && this.state.order === Constants.SORT_ASC) {
                order = Constants.SORT_DESC;
            }
        } else { /*It's desc*/
            order = Constants.SORT_DESC;
        }
        //Assign final data
        this.setState({ order, orderBy: property});
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
        const link = this.props.linksMap.get(propCode);
        if (link.linkType === 'fixed') {
           return (<Link to={{pathname: `${link.linkPrefix}${link.linkValue}${content[propCode]}`}}>{content[propCode]}</Link>);
        } else if (link.linkType === 'absolute') {
            return (<a href={`${link.linkValue}${content[propCode]}`} target="_blank">{content[propCode]}</a>);
        }
        else {/*Dynamic link*/
            return (<Link to={{pathname: `${link.linkPrefix}${link.linkValue}`}}>{content[propCode]}</Link>);
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

    getSortedData = ({ data, orderBy, order, propCode }) => 
        orderBy < 0 ? data : order === Constants.SORT_DESC ?
            [...data].sort((a, b) => (this.getCompValue(b[propCode]) < this.getCompValue(a[propCode]) ? -1 : 1))
            :
            [...data].sort((a, b) => (this.getCompValue(a[propCode]) < this.getCompValue(b[propCode]) ? -1 : 1));

    render() {
        const {
            data,
            order,
            orderBy,
            windowWidth
        } = this.state;
        const {
            activeFilter,
            filters,
            headers,
            maxMobileSize,
            onRowClick,
            propCodes,
            selectedRowIndexes,
            stylesMap
        } = this.props;
        const isMobile = windowWidth < maxMobileSize;
        const rowsSelectable = selectedRowIndexes && onRowClick;
        const tableData = this.getSortedData({ data, orderBy, order, propCode: propCodes[orderBy] })
        

        if (isMobile) {
            return (
                <Table className="responsiveTable" style={{overflow:'visible'}}>
                    <TableHead>
                        {filters && Object.keys(filters).length &&
                        <TableRow key={"filterby"}>
                            <TableCell>Filter by:</TableCell>
                            <TableCell>{this.renderFilterByValuesMobile()}</TableCell>
                        </TableRow>
                        }
                        <TableRow key={"sortby"}>
                            <TableCell>Sort by:</TableCell>
                            <TableCell>{this.renderSortByValuesMobile()}</TableCell>
                        </TableRow>
                    </TableHead>
                    {tableData.map((content, index) => {
                        // every second row is grey
                        let style = index % 2 === 0 ? whiteBackground : greyBackground;

                        if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
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
                        if (stylesMap) {
                            Object.keys(stylesMap)
                                .forEach(key => {
                                    if (content[key]) {
                                        style = {
                                            ...style,
                                            ...stylesMap[key]
                                        }
                                    }
                                })
                        }

                        return (
                            <TableBody key={index} style={style} onClick={rowsSelectable ? () => onRowClick(content, index) : () => {}}>
                                {
                                    propCodes.map((prop, index) =>
                                        <TableRow key={prop} style={style}>
                                            <TableCell>{headers[index]}</TableCell>
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
                    {filters && Object.keys(filters).length &&

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FilterListIcon style={{ marginLeft: 'auto' }}/>
                        <Select
                        style={this.filterSelectStyle}
                        value={filters[activeFilter].text}
                        onChange={this.propagateFilterChange}
                        renderValue={value => <span>{value}</span>}>
                                {Object.keys(filters).map((key) => (
                                    <MenuItem key={key} value={key}>{filters[key].text}</MenuItem>
                                    ))}
                            </Select>
                    </div>
                    }
                    <Table className="responsiveTable" style={{overflow:'visible'}}>
                        <TableHead>
                            <TableRow key={"key"}>
                                {headers.map((header, index) => (
                                    <TableCell key={header}
                                                sortDirection={orderBy === index ? order : false}>
                                            <Tooltip
                                                title="Sort"
                                                placement={'bottom-end'}
                                                enterDelay={300}>
                                                <TableSortLabel
                                                    active={orderBy === index}
                                                    direction={order}
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
                            {tableData.map((content, index) => {
                                let style = {};
                                
                                if (selectedRowIndexes && selectedRowIndexes.includes(index)) {
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
                                
                                if (stylesMap) {
                                    Object.keys(stylesMap)
                                    .forEach(key => {
                                        if(content[key]) {
                                            style = {
                                                ...style,
                                                ...stylesMap[key]
                                            }
                                        }
                                    })
                                }
                                
                                return (
                                    <TableRow key={index} style={style} onClick={rowsSelectable ? () => onRowClick(content, index) : () => {}}>
                                        {propCodes.map(propCode =>
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


export default React.memo(EISTable);