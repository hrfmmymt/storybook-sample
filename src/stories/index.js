import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
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
