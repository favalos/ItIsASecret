### react-bootstrap-inputs

This package is a small wrapper around react-bootstrap form components, that provide
`onChange` callbacks to persist data.


### Usage

The high-level `onChange` function call works as follows:

```javascript
onChange(fieldName, value) {
    var change = {};
    change[fieldName] = {$set: value};
    this.props.onSetObj(update(
            this.props.obj, change));
}
```

Via `mapStateToProps`, this function will be passed down to any view using these
components and you can use them as follows:


#### TextInput

```javascript
<TextInput key={idx}
    obj={this.props.currentCommand}
    label={command.label}
    placeholder={command.placeholder}
    onChange={self.onChange}
    name={command.name}/>
```

#### SelectInput

```javascript
<SelectInput key={idx}
    obj={this.props.currentCommand}
    label={command.label}
    choices={command.choices}
    placeholder={command.placeholder}
    onChange={self.onChange}
    name={command.name}/>
```

#### CheckInput

```javascript
<CheckInput key={idx}
    obj={this.props.currentCommand}
    label={command.label}
    placeholder={command.placeholder}
    onChange={self.onChange}
    name={command.name}/>
```
