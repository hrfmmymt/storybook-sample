import React from 'react'
import Color from '../components/Color'

const ColorStory = ({ children, onClick }) => (
  <div style={{margin: '30px'}}>
    <Color children={children} onClick={onClick} />
  </div>
)

export default ColorStory
