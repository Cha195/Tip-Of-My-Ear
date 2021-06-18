import React, { useState } from 'react'
import logo from '../Assets/Main_Logo.png'
import { Link } from 'react-router-dom'

const Genre = () => {
  const [p1Name, setP1Name] = useState('Player 1')
  const [p2Name, setP2Name] = useState('Player 2')

  const genreCard = (cardTitle) => {
    return (
      <Link to={{ pathname: `/board/${cardTitle}`, state: { p1Name: p1Name, p2Name: p2Name } }} className='card-genre'>
        <div className='genreTitle'>{cardTitle}</div>
      </Link>
    )
  }

  return (
    <div className='main_div-genre'>
      <img style={{ width: '190px' }} alt='logo' src={logo} />
      <h1 style={{ marginTop: '50px' }}>SELECT A GENRE</h1>
      <div className='player'>
        <input style={{ border: '0px' }} placeholder='Player 1' onChange={(event) => setP1Name(event.target.value)} />
        <input style={{ border: '0px' }} placeholder='Player 2' onChange={(event) => setP2Name(event.target.value)} />
      </div>
      <div className='container-genre'>
        {genreCard('ROCK')}
        {genreCard('BOLLYWOOD')}
        {genreCard('METAL')}
        {genreCard('POP')}
        {genreCard('COUNTRY')}
        {genreCard('HIP HOP')}
      </div>
    </div>
  )
}

export default Genre
