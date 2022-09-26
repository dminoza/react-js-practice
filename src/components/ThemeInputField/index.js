import React from 'react';

class ThemeInputField extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <label>{this.props.label}</label>
            <input 
            type={this.props.type} 
            value={this.props.value} 
            onChange={this.props.onChangeTheme}
            placeholder={this.props.placeholder}></input>
        </div>
    }
}

export default ThemeInputField;