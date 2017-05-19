import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  link: {
    color: '#47b3ff',
    fontSize: '1em',
    textDecoration: 'none',
    ':hover': {
      opacity: '.8',
      textDecoration: 'underline'
    }
  }
})

const Links = ({ children, onClick }) => (
  <a className={css(styles.link)} onClick={onClick} href="#">
    {children}
  </a>
)

export default Links
