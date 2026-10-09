import HeroPage from '#/components/shadcn-space/blocks/hero-03'
import { Contact7 } from '#/components/contact7'
import { Content1 } from '#/components/content1'
import Portfolio from '#/components/shadcn-space/blocks/portfolio-01/portfolio'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <HeroPage />
      <Contact7 />
      <Content1 />
      <Portfolio />
    </>
  )
}
