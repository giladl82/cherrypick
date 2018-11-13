import React from 'react'
import PropTypes from 'prop-types'

import { CherryImage } from '../CherryImage';

export const Cherry = ({ cherryType }) => (
  <div>
    <h1>{cherryType} Cherry</h1>
    <CherryImage cherryType={cherryType} />
  </div>
)

Cherry.propTypes = {
  cherryType: PropTypes.oneOf(['Rainier', 'Bing', 'Van', 'Santina', 'Skeena', 'Sweetheart', 'Lapin', 'Lambert'])
}

export default Cherry;