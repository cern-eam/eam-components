import { Component } from 'react';

class EAMBaseInput extends Component {

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

    getValue = () => this.state.value

    setValue = value => this.setState({value})

    runValidators = () => this.setState(
        {error: false},
        () => !this.props.validators.some(({ getResult, errorText }) => {
            let failed = getResult && !getResult(this.state.value)
            if (failed) this.setState({error: true, helperText: errorText})
            return failed
        })
    )

    componentWillMount () {
        let { children, elementInfo } = this.props;
        if (children && elementInfo) {
            children[elementInfo.xpath] = this;
        }
        //TODO default validators
        // if (elementInfo.isNumber) {
        //     validators.push(this.isNumber)
        // }
    }

    isNumber = (value, label) => ({
        getResult: value => value && !isNaN(value),
        errorText: `'${label || 'This field'}' should be a valid number.` 
    })

    // getValues({code: , codeDesc})

    enable = () => this.setState({disabled: false})

    disable = () => this.setState({disabled: true})

    isRequired = () => this.props.elementInfo && (this.props.elementInfo.attribute === 'R' || this.props.elementInfo.attribute === 'S')

    isHidden = () => this.props.elementInfo && this.props.elementInfo.attribute === 'H'

    validate() {
        const { value, elementInfo } = this.props;
        if (!value && this.isRequired()) {
            this.setState({ error: true, helperText: elementInfo.text + ' is a required field'})
            return false
        }
        this.setState({ error: false, helperText: null})
        return true
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

export default EAMBaseInput