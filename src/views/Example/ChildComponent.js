import React from "react";

class ChildComponent extends React.Component {
    //re-render
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {

        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let check = showJobs ? "showJobs : false" : "showJobs : true";
        console.log(">>> check ", check)

        return (
            <>
                {!showJobs ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> check child props: ', props)
//     let { arrJob } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJob.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;