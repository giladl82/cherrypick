import React from 'react'
import PropTypes from 'prop-types'
import cherry from './cherry.svg'

export const Cherry = ( { cherryType } ) => (
  <div>
    <h1>{cherryType} Cherry</h1>
    <img src={cherry} alt={cherryType} />
  </div>
)

Cherry.propTypes = {
  cherryType: PropTypes.oneOf( [ 'Rainier', 'Bing', 'Van', 'Santina', 'Skeena', 'Sweetheart', 'Lapin', 'Lambert' ] )
}

export default Cherry;