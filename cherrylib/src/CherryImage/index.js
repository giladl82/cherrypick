import React from 'react'
import PropTypes from 'prop-types'

import cherry from './cherry.svg'

export const CherryImage = ( { cherryType } ) => (
  <img src={cherry} alt={cherryType} />
)

CherryImage.propTypes = {
  cherryType: PropTypes.oneOf( [ 'Rainier', 'Bing', 'Van', 'Santina', 'Skeena', 'Sweetheart', 'Lapin', 'Lambert' ] )
}

export default CherryImage;