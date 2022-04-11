import React from 'react';

class DrumPad extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            label: this.props.label,
            key: this.props.letter
        }
    };

    render() {
        return <div className='drum-pad' id={this.state.label}>{this.state.key}</div>;
    }
}

export default DrumPad;