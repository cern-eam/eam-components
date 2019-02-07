import React, {Component} from 'react';

class EAMBaseInput extends Component {

    state = {
        error: false,
        helperText: null,
        disabled: false
    }

    componentWillMount() {
        if (this.props.children) {
            this.props.children[this.props.elementInfo.xpath] = this
        }
    }

    enable() {
        this.setState(() => ({
            disabled: false
        }))
    }

    disable() {
        this.setState(() => ({
            disabled: true
        }))
    }

    isHidden() {
        return (this.props.elementInfo.attribute === 'H')
    }

    isRequired() {
        return (this.props.elementInfo.attribute === 'R' || this.props.elementInfo.attribute === 'S')
    }

    validate() {
        if (!this.props.value && this.isRequired()) {
            this.setState(() => ({
                error: true,
                helperText: this.props.elementInfo.text + ' is a required field'
            }))
            return false
        } else {
            this.setState(() => ({
                error: false,
                helperText: null
            }))
            return true
        }
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
            value.length > this.props.elementInfo.maxLength)
        {
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