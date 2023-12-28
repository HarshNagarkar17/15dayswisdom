import React from 'react'
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import { Tabs } from '../components/Tabs'
import { Quotes } from '../components/Quotes'

export const Main = () => {
  return (
    <section>
        <Header/>
        <Heading/>
        <Tabs/>
        <Quotes/>
    </section>
  )
}
