import React from "react"
import '../css/main.css'

function ItemDetails(props) {


    let posterImg = 'https://image.tmdb.org/t/p/w500'
        + props.tmdbDetails.poster_path

    return (
        <div className="details-container col-12">
            <div className="row">
                <div className="metadata-container col-12 col-md-8">
                    <p>{props.tmdbDetails.overview}</p>
                    <div className="row mt-4">
                        <div className="col-6 meta-data">
                            <p>Release</p>
                            <span id="meta">{props.tmdbDetails.release_date}</span>
                        </div>
                        <div className="col-6 meta-data">
                            <p>Vote Average</p>
                            <span id="meta">{props.tmdbDetails.vote_average}</span>
                        </div>
                        <div className="col-6 meta-data">
                            <p>Trailer Link</p>
                            <span id="meta"><a href={props.tdDetails.yUrl}>go to youtube</a></span>
                        </div>
                        <div className="col-6 meta-data">
                            <p>Wikipedia Link</p>
                            <span id="meta"><a href={props.tdDetails.wUrl}>go to wikipedia</a></span>
                        </div>
                    </div>
                </div>
                <div className="poster-container col-12 col-md-4">
                    <img className='poster' src={posterImg} alt="poster imager" />
                </div>
            </div>

        </div>
    )
}

export default ItemDetails
