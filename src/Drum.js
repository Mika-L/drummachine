import React from 'react';

class Drum extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            textInput: ''
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
        return <div id="drum-machine">
            <div id="display">

            </div>
            <div className='drum-pad'>
                
            </div>
        </div>;
    }

}

export default Drum;