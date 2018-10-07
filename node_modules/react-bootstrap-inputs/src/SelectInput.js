import React, { PropTypes } from 'react';
import {
    Col,
    ControlLabel,
    FormControl,
    FormGroup }
from 'react-bootstrap';

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
    // the label
    choices: PropTypes.array.isRequired,
};

class SelectInput extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(fieldName, e) {
        console.log(fieldName, e);
        this.props.onChange(fieldName, e.target.value);
    }

    render() {

        var value = this.props.obj[this.props.name] || '';


        return (<div>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>
                {this.props.label}
              </Col>
              <Col sm={8}>
              <FormControl componentClass="select"
                        placeholder={this.props.placeholder}
                        value={value}
                        onChange={this.onHandleChange.bind(this, this.props.name)}
                        name={this.props.name}>

                <option key="23123" value="">
                    ** Choose an option.
                </option>
                    {this.props.choices.map((cmd, idx)=>{
                        return (<option key={idx} value={cmd.value}>
                                    {cmd.name}
                                </option>);
                    })}

              </FormControl>
             </Col>
            </FormGroup>
        </div>);
    }

}

SelectInput.propTypes = propTypes;

export default SelectInput;
