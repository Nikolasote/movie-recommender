import React from "react"
import '../css/main.css'
import ItemDetails from "./ItemDetails"

class MovieItem extends React.Component {

    constructor() {
        super()
        this.state = {
            tmbdDetails: {},
            showDetails: false
        }
        this.outputMovieDetails = this.outputMovieDetails.bind(this)
    }

    outputMovieDetails(id) {
        const queryName = this.props.item.Name.replace(/\s+/g, '+').toLowerCase()
        const queryString =
            "https://api.themoviedb.org/3/search/movie?api_key=7f56aa4b166f9fa04cd8266612e312b4&language=en-US&query="
            + queryName
            + "&page=1&include_adult=false"
        fetch(queryString)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => (
                    {
                        tmdbDetails: data.results[0],
                        showDetails: !prevState.showDetails
                    }))
            })
    }

    render() {
        return (
            <div className="row recommendation-container">
                <div className="col-9 d-flex align-items-center">
                    <h3 id="movie-title">{this.props.item.Name}</h3>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <label className="checkbox-label">
                        {this.state.showDetails ?
                            <span className="checkbox-text">hide details</span> :
                            <span className="checkbox-text">see details</span>}
                        <input
                            type="checkbox"
                            checked={this.state.showDetails}
                            name="showDetails"
                            value={this.state.showDetails}
                            onChange={() => this.outputMovieDetails(this.props.item.yID)}
                        />

                    </label>
                </div>
                {this.state.showDetails && <ItemDetails tdDetails={this.props.item} tmdbDetails={this.state.tmdbDetails} />}
            </div>
        )
    }


}

export default MovieItem

