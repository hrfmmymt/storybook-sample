import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import FadeModal from 'boron/FadeModal'
import Button from './Button'

class Modal extends Component {

  showModal() {
    this.refs.modal.show()
  }

  hideModal() {
    this.refs.modal.hide()
  }

  render() {
    return (
      <div>
        <FadeModal ref="modal">
          <h2>I am a dialog</h2>
          <Button onClick={this.hideModal.bind(this)}>Close</Button>
        </FadeModal>
      </div>
    )
  }
}

export default Modal
