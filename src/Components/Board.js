import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalBody } from 'reactstrap'
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        this.state ={
            modal: false,
            column: null,
            value: 100,
            genre: params.genre,
            year: '2020',
            token: '',
            songName: '',
            url: '',
            answer: '',
            points1: 0,
            points2: 0,
            correctAnswer: null, 
            i: 0
        }
        this.spotify = {
            ClientID: "300ac44065c949639fb54d90157e9caf",
            ClientSecret: "4eba312ff5f6466ba0728c944ccb2ce0"
        };
        this.tileRef = React.createRef()
    }

    toggle = () => {
        this.setState({modal: !this.state.modal}, () => {
            console.log(this.state.modal)
            if(!this.state.modal) {
                let Id = this.state.value + this.state.column
                const el = document.getElementById(Id);
                const elDiv = document.getElementById(Id + 'div')
                elDiv.style.pointerEvents = "none";
                elDiv.style.backgroundColor = "lightgrey";
                console.log(elDiv)
                if(this.state.i %2 === 0) {
                    el.innerHTML = "P2";
                }
                else {
                    el.innerHTML = "P1"
                }
                if(this.state.i === 20) {
                    console.log(this.state.points1, this.state.points2)
                    if(this.state.points1 > this.state.points2) {
                        alert("Player 1 wins!")
                    }
                    else if(this.state.points2 > this.state.points1) {
                        alert("Player 2 wins!")
                    }
                    else {
                        alert("It's a tie!")
                    }
                }
                this.setState({
                    url: '', 
                    correctAnswer: null,
                    answer: null,
                    songName: null,
                    column: null,
                    value: null
                })
            }
        })
    }

    tileClick = (value, column) => {
        switch(column) {
            case '1990s': 
                this.setState({year: '1990-2000'});
                break;
            case '2000s': 
                this.setState({year: '2000-2010'});
                break;
            case '2010s': 
                this.setState({year: '2010-2020'});
                break;
            case '2020': 
                this.setState({year: '2020'});
                break;
            default:
                this.setState({year: '2020'});
        }
        this.setState({value, column, i: this.state.i + 1}, () => {
            this.getSong();
            this.toggle();
        })   
    }

    tileGenerator = (value, column) => {
        let Id = value + column;
        return(
            <div id={Id+'div'} onClick={() => this.tileClick(value, column)} className="card-tile">
                <h2 id={Id}>{value}</h2>
            </div>
        )
    }

    columnGenerator = (column) => {
        return (
            <div className="column-tiles">                 
                <h2>{column}</h2>
                {this.tileGenerator(100, column)}
                {this.tileGenerator(200, column)}
                {this.tileGenerator(300, column)}
                {this.tileGenerator(400, column)}
                {this.tileGenerator(500, column)}
            </div>
        )
    }

    getRandomSearch = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    getSong = () => {
        let randomOffset = Math.floor(Math.random() * this.state.value);
        let searchQuery = this.getRandomSearch();
        axios({
            method: 'GET',
            url: `https://api.spotify.com/v1/search?query=${searchQuery}%20genre:%22${this.state.genre}%22%20year:${this.state.year}&type=track&limit=1&offset=${randomOffset}`,
            headers: { 'Authorization': 'Bearer ' + this.state.token }
        })
        .then((song) => {
            let featIndex = song.data.tracks.items[0].name.indexOf('(')
            let songName = song.data.tracks.items[0].name;
            if(featIndex !== -1) {
                songName = song.data.tracks.items[0].name.substring(0, featIndex-1);
            }
            this.setState({ songName, url: "https://open.spotify.com/embed/track/" + song.data.tracks.items[0].id });
            console.log(songName, song.data.tracks.items[0]);
        })
    }

    componentDidMount() {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(this.spotify.ClientID + ':' + this.spotify.ClientSecret)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(tokenResponse => {
            this.setState({token: tokenResponse.data.access_token});
        })
    }

    handleChange = (event) => {
        this.setState({answer: event.target.value})
    }

    handleSubmit = () => {
        let input = this.state.answer.toLowerCase();
        let answer = this.state.songName.toLowerCase();
        if(input === answer) {
            if(this.state.i % 2 === 0) {
                this.setState({points2: this.state.points2 + this.state.value, correctAnswer: "Correct!"}, () => {
                    setTimeout(this.toggle, 3000);
                })
            }
            else {
                this.setState({points1: this.state.points1 + this.state.value, correctAnswer: "Correct!"}, () => {
                    setTimeout(this.toggle, 3000);
                })
            }
        }
        else {
            let correctAnswer = 'Answer: ' + this.state.songName;
            this.setState({correctAnswer}, () => {
                setTimeout(this.toggle, 3000);
            })   
        }
    }

    render() { 
        return (
            <>
                <Modal style={{textAlign: 'center'}} isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <iframe 
                            title={this.state.songName}
                            src={this.state.url}
                            width="80" 
                            height="80" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"
                            className="songFrame"
                        >
                        </iframe>
                        <div className="input-tiles-container">
                            <input onChange={this.handleChange} type="text" placeholder="Song name..." id="txt_input_song"/>
                            <img onClick={this.handleSubmit} src="./tick.svg" alt="tick" id="btn_submit"/>
                        </div>
                        <h2>{this.state.correctAnswer}</h2>
                    </ModalBody>
                </Modal>
                <div className="main_div-tiles">
                    <div className="points_main_div">
                        <div className="card-points">                    
                            <h3>{this.props.location.state.p1Name}</h3>
                            <p>{this.state.points1}</p>
                        </div>
                        <div className="card-points">
                            <h3>{this.props.location.state.p2Name}</h3>
                            <p>{this.state.points2}</p>
                        </div>
                    </div>
                    <div className="container-tiles">
                        {this.columnGenerator("1990s")}
                        {this.columnGenerator("2000s")}
                        {this.columnGenerator("2010s")}
                        {this.columnGenerator("2020")}                      
                    </div>
                    
                </div>
            </>
        );
    }
}
 
export default Board;