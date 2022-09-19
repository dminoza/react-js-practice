import React from 'react';

class ThemeButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>
                    <button style={{backgroundColor: 'red', padding: 10, fontSize: 24}}>
                        {this.props.text}
                    </button>
                </div>
            </>
        )
    }
}

export default ThemeButton;