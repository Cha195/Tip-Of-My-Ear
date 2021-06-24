import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tick from '../Assets/tick.svg'
import logo from '../Assets/Logo.svg'
import { Modal, ModalBody } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import './Board.css'

const Board = (props) => {
  const { match: { params } } = props
  const history = useHistory()
  const [modal, setModal] = useState(false)
  const [valueChange, setvalueChange] = useState(false)
  const [column, setColumn] = useState(null)
  const [value, setValue] = useState(100)
  const [year, setYear] = useState('2020-2021')
  const [token, setToken] = useState('')
  const [songName, setSongName] = useState('')
  const [url, setUrl] = useState('')
  const [answer, setAnswer] = useState('')
  const [player1, setPlayer1] = useState(0)
  const [player2, setPlayer2] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [iterator, setIterator] = useState(0)
  const [winnerMessage, setWinnerMessage] = useState('')
  const [winnerModal, setWinnerModal] = useState(false)
  const genre = params.genre

  const spotify = {
    ClientID: process.env.REACT_APP_CLIENT_ID,
    ClientSecret: process.env.REACT_APP_CLIENT_SECRET
  }

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(spotify.ClientID + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
      setToken(tokenResponse.data.access_token)
    })
  }, [spotify.ClientID, spotify.ClientSecret])

  const winnerToggle = () => {
    setWinnerModal(!winnerModal)
    if (winnerModal) {
      history.push('/')
    }
  }

  const tileClick = (value, column) => {
    switch (column) {
      case '1990s':
        setYear('1990-2000')
        break
      case '2000s':
        setYear('2000-2010')
        break
      case '2010s':
        setYear('2010-2020')
        break
      case '2020':
        setYear('2020-2021')
        break
      default:
        setYear('2020-2021')
    }
    setvalueChange(true)
    setValue(value)
    setColumn(column)
    setIterator(iterator + 1)
    setModal(true)
  }

  useEffect(() => {
    if (valueChange && iterator > 0) {
      const getSong = async () => {
        const randomOffset = Math.floor(Math.random() * value)
        const searchQuery = getRandomSearch()

        await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/search?query=${searchQuery}%20genre:%22${genre}%22%20year:${year}&type=track&limit=1&offset=${randomOffset}`,
          headers: { Authorization: 'Bearer ' + token }
        }).then((song) => {
          if (song.data.tracks.items[0]) {
            const track = song.data.tracks.items[0]
            const extraIndex = track.name.indexOf('-')
            const featIndex = track.name.indexOf('(')
            const authorIndex = track.name.indexOf('[')
            let songName = track.name
            if (extraIndex !== -1) {
              songName = songName.substring(0, extraIndex - 1)
            }
            if (extraIndex !== -1) {
              songName = songName.substring(0, authorIndex - 1)
            }
            if (featIndex !== -1) {
              songName = songName.substring(0, featIndex - 1)
            }
            setSongName(songName)
            setUrl('https://open.spotify.com/embed/track/' + track.id)
          } else {
            getSong()
          }
        })
      }
      getSong()
    }
  }, [valueChange, iterator, genre, token, value, year])

  const tileGenerator = (value, column) => {
    const Id = value + column
    const divId = Id + 'div'
    return (
      <div id={divId} onClick={() => tileClick(value, column)} className='card-tile'>
        <h2 id={Id}>{value}</h2>
      </div>
    )
  }

  const columnGenerator = (column) => {
    return (
      <div className='column-tiles'>
        <h2>{column}</h2>
        {tileGenerator(100, column)}
        {tileGenerator(200, column)}
        {tileGenerator(300, column)}
        {tileGenerator(400, column)}
        {tileGenerator(500, column)}
      </div>
    )
  }

  const getRandomSearch = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    return characters.charAt(Math.floor(Math.random() * characters.length))
  }

  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  const handleToggle = (millisecs) => {
    setTimeout(() => {
      setModal(false)
    }, millisecs)
  }

  const handleSubmit = () => {
    const divId = value + column + 'div'
    const elDiv = document.getElementById(divId)
    elDiv.style.pointerEvents = 'none'

    if (answer) {
      if (answer.toLowerCase() === songName.toLowerCase()) {
        if (iterator % 2 === 0) {
          elDiv.style.backgroundColor = '#BBBFFF'
          elDiv.innerHTML = 'P2'
          setPlayer2(player2 + value)
        } else {
          elDiv.style.backgroundColor = '#F8C0FD'
          elDiv.innerHTML = 'P1'
          setPlayer1(player1 + value)
        }
        setCorrectAnswer('Correct!')
        handleToggle(750)
      } else {
        elDiv.style.backgroundColor = 'lightgrey'
        if (iterator % 2 === 0) {
          elDiv.innerHTML = 'P2'
          setPlayer2(player2 - value)
        } else {
          elDiv.innerHTML = 'P1'
          setPlayer1(player1 - value)
        }
        handleToggle(1000)
        setCorrectAnswer('Answer: ' + songName)
      }
    } else {
      elDiv.style.backgroundColor = 'lightgrey'
      if (iterator % 2 === 0) {
        elDiv.innerHTML = 'P2'
      } else {
        elDiv.innerHTML = 'P1'
      }
      setCorrectAnswer('Answer: ' + songName)
      handleToggle(1000)
    }
    if (iterator === 20) {
      setTimeout(() => {
        if (player1 > player2) {
          setWinnerMessage(`${props.location.state.p1Name} is the winner!`)
        } else if (player2 > player1) {
          setWinnerMessage(`${props.location.state.p2Name} is the winner!`)
        } else {
          setWinnerMessage('It is a tie!')
        }
        winnerToggle()
      }, 2000)
    }
  }

  useEffect(() => {
    if (!modal) {
      setUrl('')
      setCorrectAnswer('')
      setAnswer('')
      setSongName('')
      setColumn(null)
      setValue(null)
      setvalueChange(false)
    }
  }, [modal])

  return (
    <>
      <Modal style={{ textAlign: 'center', width: '100vw' }} isOpen={modal}>
        <ModalBody>
          <iframe
            title={songName}
            src={url}
            width='80'
            height='80'
            frameBorder='0'
            allowtransparency='true'
            allow='encrypted-media'
            className='songFrame'
          />
          <div className='input-tiles-container'>
            <input onChange={handleChange} type='text' placeholder='Song name...' id='txt_input_song' autoComplete='off' />
            <img onClick={handleSubmit} src={tick} alt='tick' id='btn_submit' />
          </div>
          <h2>{correctAnswer}</h2>
        </ModalBody>
      </Modal>
      <Modal style={{ textAlign: 'center', width: '100vw', padding: '50px' }} isOpen={winnerModal}>
        <ModalBody>
          <h1>{winnerMessage}</h1>
          <img onClick={winnerToggle} style={{ width: '50px' }} src={tick} alt='tick' id='btn_submit' />
        </ModalBody>
      </Modal>
      <div className='main_div-tiles'>
        <div className='points_main_div'>
          <div className='card-points' style={{ paddingLeft: '10px', borderLeft: '10px solid #F8C0FD' }}>
            <h3>{props.location.state.p1Name}</h3>
            <p>{player1}</p>
          </div>
          <Link to='/'>
            <img style={{ width: '57%', height: '100%', cursor: 'pointer' }} alt='logo' src={logo} />
          </Link>
          <div className='card-points' style={{ paddingRight: '10px', borderRight: '10px solid #BBBFFF' }}>
            <h3>{props.location.state.p2Name}</h3>
            <p style={{ right: '0' }}>{player2}</p>
          </div>
        </div>
        <div className='container-tiles'>
          {columnGenerator('1990s')}
          {columnGenerator('2000s')}
          {columnGenerator('2010s')}
          {columnGenerator('2020')}
        </div>
      </div>
    </>
  )
}

export default Board
