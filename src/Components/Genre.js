import React, { Component } from 'react';
import logo from './Main_Logo.png';
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
                <div className="genreTitle">{cardTitle}</div>
            </Link>
        );
    }

    render() { 
        return (
            <div className="main_div-genre">
                <img style={{width: "190px"}} alt="logo" src={logo}/>
                <h1 style={{marginTop: "50px"}}>SELECT A GENRE</h1>
                <div className="player">
                    <input style={{border: "0px"}} placeholder="Player 1" onChange={(event) => this.setState({p1Name: event.target.value})}/>
                    <input style={{border: "0px"}} placeholder="Player 2" onChange={(event) => this.setState({p2Name: event.target.value})}/>
                </div>
                <div className="container-genre">
                    {this.genreCard("ROCK")}
                    {this.genreCard("BOLLYWOOD")}
                    {this.genreCard("METAL")}
                    {this.genreCard("POP")}
                    {this.genreCard("COUNTRY")}
                    {this.genreCard("HIP HOP")}
                </div>
            </div>
        );
    }
}
 
export default Genre;