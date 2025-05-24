import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project Managers', salary: '1000' },
        ]
    }

    /*
    JSX => return 
    */

    handleOnChangeFirstName = (event) => {
        console.log('event target value: ', event.target.value, ', event target: ', event.target)
        this.setState({
            firstName: event.target.value,
        })
    }

    handleOnChangeLastName = (event) => {
        console.log('event target value: ', event.target.value, ', event target: ', event.target)
        this.setState({
            lastName: event.target.value,
        })
    }

    handleSubmit = (event) => {
        console.log("hit the button")
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }

    render() {

        // let name = 'ERIC';

        console.log(">>> call render: ", this.state)

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleOnChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleOnChangeLastName(event)} />

                    <br /> <br />

                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}></input>
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={'Hồ Chí Minh'}
                    arrJob={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;