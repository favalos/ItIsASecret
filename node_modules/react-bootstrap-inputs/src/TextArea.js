import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import {
    Col,
    ControlLabel,
    FormControl,
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
    // apply default value?
    defaultValue: PropTypes.string,
    // width
    width: PropTypes.string,
    // height
    height: PropTypes.string,
};

class TextArea extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(fieldName) {
        var value = ReactDOM.findDOMNode(this.refs[fieldName]).value;
        this.props.onChange(fieldName, value);
    }

    render() {

        var value = this.props.obj[this.props.name] || (this.props.defaultValue || '');
        var styles = {};
        if (this.props.width) {
            styles.width = this.props.width;
        }
        if (this.props.height) {
            styles.height = this.props.height;
        }

        return (<div>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>
                {this.props.label}
              </Col>
              <Col sm={8}>
                <FormControl type="text" name={this.props.name}
                    style={styles}
                    componentClass="textarea"
                    placeholder={this.props.placeholder}
                    ref={this.props.name}
                    value={value}
                    onChange={this.onHandleChange.bind(this, this.props.name)}/>
              </Col>
            </FormGroup>
        </div>);
    }
}

TextArea.propTypes = propTypes;

export default TextArea;
