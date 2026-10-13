import Navbar from '#/components/shadcn-space/blocks/hero-03/navbar.tsx'
import type { NavLinkItem } from '#/components/shadcn-space/blocks/hero-03/navlink.tsx'
import HeroSection from '#/components/shadcn-space/blocks/hero-03/hero.tsx'

const HeroPage = () => {
  const navigationData: NavLinkItem[] = [
    { title: 'Home', href: '#', isActive: true },
    { title: 'Contact', href: '/#contact', isActive: false },
    { title: 'About', href: '/#about', isActive: false },
    { title: 'Departments', href: '/#departments', isActive: false },
    { title: 'Our Weekly Catalogue', href: '#', isActive: false },
  ]
  return (
    <>
      <Navbar navigationData={navigationData} />
      <main className="-mt-20">
        <HeroSection />
      </main>
    </>
  )
}

export default HeroPage
