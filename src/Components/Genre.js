import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Genre extends Component {

    state = {
        p1Name: 'Player 1',
        p2Name: 'Player 2'
    }

    genreCard = (cardTitle) => {
        const {p1Name, p2Name} = this.state;
        return(
            <Link to={{pathname: `/board/${cardTitle}`, state: {p1Name: p1Name, p2Name: p2Name}}} className="card-genre">
                <div >{cardTitle}</div>
            </Link>
        );
    }

    render() { 
        return (
            <div className="main_div-genre">
                <h1 style={{marginTop: "50px"}}>Select a genre</h1>
                <div className="player">
                    <input placeholder="Player 1" onChange={(event) => this.setState({p1Name: event.target.value})}/>
                    <input placeholder="Player 2" onChange={(event) => this.setState({p2Name: event.target.value})}/>
                </div>
                <div className="container-genre">
                    {this.genreCard("Rock")}
                    {this.genreCard("Bollywood")}
                    {this.genreCard("Metal")}
                    {this.genreCard("Pop")}
                    {this.genreCard("Country")}
                    {this.genreCard("Hip Hop")}
                </div>
            </div>
        );
    }
}
 
export default Genre;