import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  regular: {
    fontWeight: 'normal'
  }
})

const FontRegular = ({ children }) => (
  <div className={css(styles.regular)}>
    { children }
  </div>
)

export default FontRegular
