import React from 'react'
import Posters from './Posters'

const Row = ({title,posters}) => {
  return (
    <div>
        <div className="row">
            <h2>{title}</h2>
            <Posters posters={posters} />
        </div>
    </div>
  )
}

export default Row