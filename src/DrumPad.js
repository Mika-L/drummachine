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
        return <div className='drum-pad' id={this.state.label}>{this.state.key}
            <audio
                id={this.state.key}
                className='clip'
                controls
                src="/media/cc0-audio/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>;
    }
}

export default DrumPad;