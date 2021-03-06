import React from 'react'

import Button from '../components/button'
import MenuButton from '../components/menu-button'
import Navigation from '../components/navigaiton'
import SvgHome from '../components/icon/Home'
import TweetButton from '../components/tweet-button'
import ProfileBox from '../components/profile-box'

export default {
  title: 'Buttons',
  component: Button
}

export const Normal = () => {
  return <Button>Save</Button>
}
export const Menu = () => {
  return (
    <MenuButton>
      {' '}
      <SvgHome /> Home
    </MenuButton>
  )
}
export const TweetsButton = () => {
  return <TweetButton>Tweetle</TweetButton>
}
export const profile = () => {
  return <ProfileBox />
}
export const Nav = () => {
  return <Navigation />
}
