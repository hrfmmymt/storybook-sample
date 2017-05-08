import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  base: {
    color: '#000',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#fff',
    padding: '1em'
  },
  main: {
    color: '#000',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#1ba1ff',
    padding: '1em'
  },
  accent: {
    backgroundColor: '#1c5db5',
    color: '#000',
    fontSize: '16px',
    border: 'none',
    padding: '1em',
  },
  accentNotice: {
    backgroundColor: '#ffc11c',
    color: '#000',
    fontSize: '16px',
    border: 'none',
    padding: '1em',
  }
})

const accent = {
  backgroundColor: '#1c5db5',
}

const Color = ({ children, onClick }) => (
  <div>
    <h1>Theme Color</h1>

    <div className={css(styles.base)} onClick={onClick}>Base Color</div>
    <div className={css(styles.main)} onClick={onClick}>Main Color</div>
    <div className={css(styles.accent)} onClick={onClick}>Accent Color {accent.backgroundColor}</div>
    <div className={css(styles.accentNotice)} onClick={onClick}>Accent Color {accent.backgroundColor}</div>

    <textarea value={css(styles.base)}></textarea>

  </div>
)

export default Color
