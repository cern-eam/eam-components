import TextField from '@material-ui/core/TextField';
import React from 'react';
import EAMBaseInput from './EAMBaseInput';

class EAMInput extends EAMBaseInput {

    state = {}

    componentDidMount () {
        super.componentDidMount.apply(this, this.props);
        this.setStateFromProps(this.props)
    }

    componentWillReceiveProps (nextProps) {
        super.componentDidMount.apply(this, nextProps);
        this.setStateFromProps(nextProps)
    }

    setStateFromProps = props => {
        this.setValue(props && props.value || '')
    }

    render() {
        
        if (this.isHidden()) {
            return <div/>
        }

        return (
            <TextField
                disabled={this.state.disabled || this.props.elementInfo.readonly}
                error={this.state.error}
                helperText={this.state.helperText}
                required={this.isRequired()}
                label={this.props.elementInfo.text}
                value={this.props.value  || ''}
                onChange={event => this.onChangeHandler(event.target.value)}
                fullWidth
                margin="normal"/>
        )
    }
}

export default EAMInput