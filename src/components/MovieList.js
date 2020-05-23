import React from "react"
import '../css/main.css'
import InputForm from "./InputForm"
import MovieItem from "./MovieItem"

class MovieList extends React.Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            recommendationList: [],
            count: 5,
        }
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.outputNamesList = this.outputNamesList.bind(this)
        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }


    //FUNCTIONS

    handleSearchInput(event) {
        const input = event.target.value.replace(/\s+/g, '+').toLowerCase()
        this.setState({
            userInput: input
        })
    }

    outputNamesList(event) {
        event.preventDefault()
        const queryString =
            "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?k=368207-Universi-YVVZ2Q9P&q="
            + this.state.userInput
            + "&type=movies&limit="
            + this.state.count
            + "&info=1"
        fetch(queryString)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        recommendationList: data.Similar.Results,
                    })
            })
    }

    //COUNTER

    incrementCount(event) {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                count: Math.min(prevState.count + 1, 20)
            };
        });
    }

    decrementCount(event) {
        event.preventDefault()
        this.setState((prevState) => {
            return {
                count: Math.max(prevState.count - 1, 0)
            };
        });
    }

    //RENDER

    render() {
        const movieItems = this.state.recommendationList.map(item => {
            return <MovieItem key={item.yID} item={item} />
        })

        return (
            <div className="row">
                <InputForm
                    handleChange={this.handleSearchInput}
                    handleSubmit={this.outputNamesList}
                    input={this.state.userInput}
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount}
                />
                <div
                    className="col-12 mt-3 movie-list-container">
                    {movieItems}
                </div>
            </div>
        )
    }
}

export default MovieList