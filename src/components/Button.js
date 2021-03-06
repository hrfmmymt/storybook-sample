import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  button: {
    boxSizing: 'border-box',
    color: '#000',
    fontSize: '1em',
    padding: '1em',
    border: 'none',
    borderRadius: '2px',
    backgroundColor: '#ffc11c',
    boxShadow: '0 3px 0 0 #d2a134',
    cursor: 'pointer',
    ':hover': {
      opacity: '.8'
    }
  }
})

const Button = ({ children, onClick }) => (
  <button className={css(styles.button)} onClick={onClick}>
    {children}
  </button>
)

export default Button
