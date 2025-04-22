import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        channel: 'ReactJS Turtual'
    }

    /*
    JSX => return 
    */

    render() {

        let name = 'Eric';

        return (
            <React.Fragment>
                <div className="first">
                    {console.log('My name is: ', this.state.name)}
                    hello my component, My name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;