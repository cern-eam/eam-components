import { Component } from 'react';

export default class EAMBaseInput extends Component {

    //PROPS
    // VALIDATORS (list not required) default([])
    // DEFAULT HELPER TEXT (string not required)
    // SHOW HELPER TEXT (function not required)
    // 

    state = {
        error: false,
        helperText: null,
        disabled: false,
        value: undefined, // [{validator: function(){}, errorText: ''}]
        validators: []
    }

    componentDidMount () {
        this.setValidatorsFromProps(this.props)
    }

    componentWillReceiveProps (nextProps) {
        this.setValidatorsFromProps(nextProps)
    }

    setValidatorsFromProps = (props) => {
        let { children, elementInfo, customValidators, valueKey } = props;
        if (children && elementInfo) {
            children[elementInfo.xpath] = this;
        }
    
        let myValidators = [...(customValidators || [])]
        const label = elementInfo.text;
        if (elementInfo.fieldType === 'number') {
            myValidators.push(this.isNumber(label))
        }
        if (this.isRequired()) {
            myValidators.push(this.hasValue(label))
        }
        this.setState({validators: myValidators})
    }

    setValue = value => this.setState({value})

    runValidators = () => this.setState(
        {error: false},
        () => !this.props.validators.some(({ getResult, errorText }) => {
            let failed = getResult && !getResult(this.state.value)
            if (failed) this.setState({error: true, helperText: errorText})
            return failed
        })
    )

    hasValue = label => ({
        getResult: value => value,
        errorText: `*Required field` 
    })

    isNumber = label => ({
        getResult: value => value && !isNaN(value),
        errorText: `'${label || 'This field'}' should be a valid number` 
    })

    // getValues({code: , codeDesc})

    enable = () => this.setState({disabled: false})

    disable = () => this.setState({disabled: true})

    isRequired = () => this.props.elementInfo && (this.props.elementInfo.attribute === 'R' || this.props.elementInfo.attribute === 'S')

    isHidden = () => this.props.elementInfo && this.props.elementInfo.attribute === 'H'

    validate () {
        let { helperText, validators, value } = this.state;
        debugger;
        let valid = !validators
            .some(({ getResult, errorText }) => {
                let failed = getResult && !getResult(value)
                if (failed) helperText = errorText
                return failed
            })

        this.setState({error: !valid, helperText: valid ? '' : helperText})
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
}

EAMBaseInput.defaultProps = {
    customValidators: []
}