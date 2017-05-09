import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  common: {
    color: '#000',
    fontSize: '16px',
    border: 'none',
    padding: '1em'
  },
  base: {
    backgroundColor: '#fff',
  },
  main: {
    backgroundColor: '#1ba1ff',
  },
  accent: {
    backgroundColor: '#1c5db5',
  },
  accentNotice: {
    backgroundColor: '#ffc11c',
  },
})

Object.keys(styles).forEach(key => {
  const val = styles[key]
  console.log(key, val._definition)
}, styles)

const Color = ({ children, onClick }) => (
  <div>
    <h1>Theme Color</h1>

    <div className={css(styles.common, styles.base)} onClick={onClick}>Base Color {styles.base._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.main)} onClick={onClick}>Main Color {styles.main._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.accent)} onClick={onClick}>Accent Color {styles.accent._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.accentNotice)} onClick={onClick}>Accent Color {styles.accentNotice._definition.backgroundColor}</div>

    <textarea value={css(styles.base)}></textarea>

  </div>
)

export default Color
