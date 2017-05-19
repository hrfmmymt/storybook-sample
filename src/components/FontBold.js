import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  }
})

const FontBold = ({ children }) => (
  <div className={css(styles.bold)}>
    { children }
  </div>
)

export default FontBold
