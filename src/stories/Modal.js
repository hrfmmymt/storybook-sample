import React, { Component } from 'react'
import Modal from '../components/Modal'
import Button from './Button'

class ModalStory extends Component {

  showModal() {
    this.refs.modal.showModal()
  }

  render() {
    return (
      <div>
        <Button onClick={this.showModal.bind(this)}>Open</Button>
        <Modal ref="modal" />
      </div>
    )
  }
}

export default ModalStory
