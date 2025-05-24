import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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

        console.log(">>> check props: ", this.props)

        // let name = this.props.name;
        // let age = this.props.age
        //key: value

        let { name, age, address, arrJob } = this.props;
        let a = '';

        return (
            <>
                <div className="job-lists">
                    {
                        a = arrJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;