import React from 'react'
import Links from '../components/Links'

const LinksStory = ({ children, onClick }) => (
  <div style={{margin: '30px'}}>
    <Links children={children} onClick={onClick} />
  </div>
)

export default LinksStory
