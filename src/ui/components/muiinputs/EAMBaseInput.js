import { Component } from 'react';

export default class EAMBaseInput extends Component {

    //PROPS
    // VALIDATORS (list not required) default([])
    // DEFAULT HELPER TEXT (string not required)
    // SHOW HELPER TEXT (function not required)

    state = {
        error: false,
        helperText: null,
        disabled: false,
        value: undefined, // [{validator: function(){}, errorText: ''}]
        validators: []
    }

    componentDidMount () {
        this.initBase(this.props)
    }

    componentWillReceiveProps (nextProps) {
        this.initBase(nextProps)
    }

    initBase = (props) => {
        // Register as children
        let { children, elementInfo, customValidators, valueKey } = props;
        if (children && elementInfo) {
            children[elementInfo.xpath] = this;
        }
    
        // Set the validators
        let myValidators = [...(customValidators || [])]
        const label = elementInfo.text;
        if (this.isRequired()) {
            myValidators.push(this.hasValue(label))
        }
        if (elementInfo.fieldType === 'number') {
            myValidators.push(this.isNumber(label))
        }
        this.setState({validators: myValidators})

        //Subclass init
        if (this.init) this.init(props)
    }

    //Set value to be able to modify value before e.g. uppercasing
    setValue = value => this.setState({value})

    hasValue = label => ({
        getResult: value => {
            return !!(value !== null && 
                typeof value === 'object' ? value.code || value.length > 0
                : value)
        },
        errorText: `*Required field` 
    })

    isNumber = label => ({
        getResult: value => !isNaN(parseFloat(value)),
        errorText: `'${label || 'This field'}' should be a valid number` 
    })

    // getValues({code: , codeDesc})

    enable = () => this.setState({disabled: false})

    disable = () => this.setState({disabled: true})

    isRequired = () => this.props.elementInfo && (this.props.elementInfo.attribute === 'R' || this.props.elementInfo.attribute === 'S')

    isHidden = () => this.props.elementInfo && this.props.elementInfo.attribute === 'H'

    validate () {
        let { validators, value } = this.state;
        let helperText = '';
        let valid = !validators
            .some(({ getResult, errorText }) => {
                let failed = getResult && !getResult(value)
                if (failed) helperText = errorText
                return failed
            })

        this.setState({error: !valid, helperText: helperText})
        return valid
    }

    onChangeHandler = (value) => {
        // TODO: uppercased fields
        //if (this.props.elementInfo.characterCase === 'uppercase') {
        //    value = value.toUpperCase()
        //}

        // Don't set the value if it is about to (or has already) exceeded the max length
        if (value &&
            value.length &&
            this.props.elementInfo.maxLength &&
            value.length > this.props.elementInfo.maxLength) {
            return
        }

        this.props.updateProperty(this.props.valueKey, value);
        //Extra function if needed
        if (this.props.onChangeValue) {
            this.props.onChangeValue(value);
        }
    };

    render () {
        if (this.isHidden() || !this.renderComponent) {
            return null
        }
        return this.renderComponent();
    }
}

EAMBaseInput.defaultProps = {
    customValidators: []
}