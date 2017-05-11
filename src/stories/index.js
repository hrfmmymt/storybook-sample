import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import Button from './Button'
import Color from './Color'
import Font from './Font'
import Heading from './Heading'
import Modal from './Modal'
import Welcome from './Welcome'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('Font', module)
  .add('font', () => (
    <Font>
      <p>あのイーハトーヴォのすきとおった風、</p>
      <p>夏でも底に冷たさをもつ青いそら、</p>
      <p>うつくしい森で飾られたモーリオ市、</p>
      <p>郊外のぎらぎらひかる草の波。</p>
      <p>祇辻飴葛蛸鯖鰯噌庖箸</p>
      <p>ABCDEFGHIJKLM</p>
      <p>abcdefghijklm</p>
      <p>1234567890</p>
    </Font>
  ))

storiesOf('Heading', module)
  .add('heading', () => (
    <Heading>Hello, World!</Heading>
  ))

storiesOf('Color', module)
  .add('theme color', () => (
    <Color onClick={action('color-clicked')}>Hello, World!</Color>
  ))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={ action('button-click') }>Hello Button</Button>
  ))

  .add('with some emoji', () => (
    <WithNotes notes={'Here we use some emoji as the Button text. Isn\'t it look nice?'}>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </WithNotes>
  ))

storiesOf('Modal', module)
  .add('modal', () => (
    <Modal />
  ))
