import React, { PropTypes } from 'react';
import {
    Col,
    ControlLabel,
    Checkbox,
    FormGroup
} from 'react-bootstrap';

const propTypes = {
    // the placeholder
    placeholder: PropTypes.string.isRequired,
    // the name
    name: PropTypes.string.isRequired,
    // the label
    label: PropTypes.string.isRequired,
    // what happens when you change this thing
    onChange: PropTypes.func.isRequired,
    // obj
    obj: PropTypes.object.isRequired,
};

class CheckInput extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(fieldName, e) {
        console.log( fieldName, e.target.checked);
        this.props.onChange(fieldName, e.target.checked);
    }

    render() {
        var self = this;
        var value = this.props.obj[this.props.name] || '';
        var html;
        if(value === true) {
            html = (<Checkbox name={self.props.name} checked value={value}
                onChange={this.onHandleChange.bind(self, self.props.name)} >
            </Checkbox>);
        } else {
            html = (<Checkbox name={self.props.name} value={value}
                onChange={this.onHandleChange.bind(self, self.props.name)} >
            </Checkbox>);
        }
        return (<div>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>
                {this.props.label}
              </Col>
              <Col sm={8}>
              {html}
              </Col>
            </FormGroup>
        </div>);
    }
}

CheckInput.propTypes = propTypes;

export default CheckInput;
