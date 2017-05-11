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
  backGround: {
    backgroundColor: '#f7f7f8'
  },
  backGroundBlue: {
    backgroundColor: '#ddf1ff'
  },
  similar: {
    backgroundColor: '#47b3ff'
  },
  red: {
    backgroundColor: '#fc2c46'
  }
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
    <div className={css(styles.common, styles.backGround)} onClick={onClick}>Background Color {styles.backGround._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.backGroundBlue)} onClick={onClick}>Background Color {styles.backGroundBlue._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.similar)} onClick={onClick}>Background Color {styles.similar._definition.backgroundColor}</div>
    <div className={css(styles.common, styles.red)} onClick={onClick}>Background Color {styles.red._definition.backgroundColor}</div>
  </div>
)

export default Color
