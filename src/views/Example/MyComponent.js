import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        channel: 'ReactJS Turtual'
    }

    /*
    JSX => return 
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        let name = 'Eric';

        return (
            <React.Fragment>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    {console.log('My name is: ', this.state.name)}
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;