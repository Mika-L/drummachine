import React from 'react';
import DrumPad from './DrumPad';

class Drum extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            textInput: '',
            pads: [
                {
                    label: "Heater-1",
                    key: "Q"
                },
                {
                    label: "Heater-2",
                    key: "W"
                },
                {
                    label: "Heater-3",
                    key: "E"
                },
                {
                    label: "Heater-4",
                    key: "A"
                },
                {
                    label: "Clap",
                    key: "S"
                },
                {
                    label: "Open-HH",
                    key: "D"
                },
                {
                    label: "Kick-n'-Hat",
                    key: "Z"
                },
                {
                    label: "Kick",
                    key: "X"
                },
                {
                    label: "Close-HH",
                    key: "C"
                }]
        };

        this.handleFocus = this.handleFocus.bind(this);

    }

    handleFocus(event) {
        this.setState(
            {
                textInput: event.target.value
            });

        console.log(this.state.textInput);
    }

    render() {
        // const pads = this.state.pads.map((item, i) => (<div className='drum-pad' id={item.label}>{item.key}</div>));

        const pads = this.state.pads.map((item, i) => (<DrumPad key={item.label} label={item.label} letter={item.key} />));

        return <div id="drum-machine">
            <div id="display">
            </div>
            {pads}
        </div>;
    }

}

export default Drum;