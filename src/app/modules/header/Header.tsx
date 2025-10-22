'use client'
import React from 'react'
import { WebHeader } from './WebHeader/WebHeader'
import { MobHeader } from './MobHeader/MobHeader'
import { TabletHeader } from './TabletHeader/TabletHeader'

const Header = () => {
  return (
    <>
      <WebHeader />
      <TabletHeader />
      <MobHeader />
    </>
  )
}

export { Header }
