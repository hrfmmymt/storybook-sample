import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from './Button'
import Color from './Color'
import Heading from './Heading'
import Modal from './Modal'
import Welcome from './Welcome'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Heading', module)
  .add('heading', () => (
    <Heading>Hello, World!</Heading>
  ))

storiesOf('Color', module)
  .add('theme color', () => (
    <Color onClick={action('color-clicked')}>Hello, World!</Color>
  ))
  .add('key color', () => (
    <Color onClick={action('clicked')}>Hello, World!</Color>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('Modal', module)
  .add('modal', () => (
    <Modal />
  ))
