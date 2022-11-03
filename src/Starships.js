import React from 'react'

export const Starships = ({name, model, numberOfFilms}) => {
  return (
    <div className='starship'>
      <div className='desription'>
        <h3 className='name'>{name}</h3>
        <div>

          <h4 className='model'>
          <p >Model:</p>
          <p className='info'>{model}</p>
          </h4>

        </div>

        <div >

          <h4 className='films'>
          <p>Number of films:</p>
          <p className='info'>{numberOfFilms}</p>
          </h4>

        </div>

      </div>

    </div>
  )
}
