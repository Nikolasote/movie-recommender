import React from "react"
import '../css/main.css'

class InputForm extends React.Component {

    render() {
        return (
            <div className="col-12">
                <p
                    id="description"
                    className="text-center">
                    Insert the title of a movie that you like and adjust how many recommendations you want to receive.
                </p>
                <form>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input
                                tabindex="1"
                                className="inline-form text-center"
                                id="text-input"
                                type="text"
                                value={this.props.userInput}
                                placeholder="Enter movie title"
                                onChange={this.props.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="mx-auto">
                            <button
                                type="button"
                                className="count-btn"
                                onClick={this.props.decrementCount}
                                tabindex="3">
                                -
                                </button>
                            <button
                                type="submit"
                                className="submit-btn"
                                onClick={this.props.handleSubmit}
                                tabindex="2">
                                Show <span id="count-output">{this.props.count}</span> Similar Movies
                            </button>
                            <button
                                type="button"
                                className="count-btn"
                                onClick={this.props.incrementCount}
                                tabindex="4">
                                +
                            </button>
                        </div>
                    </div>
                </form >
            </div >
        )
    }
}

export default InputForm