'use client'

import { Badge } from '#/components/ui/badge.tsx'
import { Card, CardContent } from '#/components/ui/card.tsx'
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'

type PortfolioData = {
  portfolio_image: string
  portfolio_title: string
  portfolio_alt?: string
  portfolio_credit?: {
    author: string
    sourceUrl: string
    license: string
    licenseUrl: string
  }
}

const portfolioData: PortfolioData[] = [
  {
    portfolio_image: '../../public/images/fresh-produce-no-sign.png',
    portfolio_title: 'Fresh produce',
  },
  {
    portfolio_image: '../../public/images/meat-poultry-section.png',
    portfolio_title: 'Meat and Seafood',
  },
  {
    portfolio_image: '../../public/images/dairy-section.png',
    portfolio_title: 'Dairy products',
  },
  {
    portfolio_image: '/images/frozen-goods.jpg',
    portfolio_title: 'Frozen Goods',
    portfolio_alt: 'Packaged frozen foods displayed in grocery store freezers',
    portfolio_credit: {
      author: 'Leon Brooks',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Freezer_cabinet_with_food.jpg',
      license: 'Public domain',
      licenseUrl:
        'https://commons.wikimedia.org/wiki/File:Freezer_cabinet_with_food.jpg',
    },
  },
  {
    portfolio_image: '/images/dry-goods.jpg',
    portfolio_title: 'Dry Goods',
    portfolio_alt:
      'Shelves of packaged dry goods in a small Mexican grocery store',
    portfolio_credit: {
      author: 'Xanyssel',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Tienda_de_abarrotes,_Mercado_Michoac%C3%A1n.jpg',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  },
]

const Portfolio = () => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    }),
  }

  return (
    <section id="departments" className="bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 justify-center items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 justify-center items-center animate-in fade-in slide-in-from-top-8 duration-700 ease-in-out">
            {/* Badge */}
            <Badge
              variant={'outline'}
              className="py-1 px-3 text-sm font-normal h-7"
            >
              Our Departments
            </Badge>
            {/* Heading */}
            <div className="max-w-xs sm:max-w-2xl mx-auto text-center">
              <h2 className="text-foreground text-3xl sm:text-5xl font-semibold">
                Our Department Showcase
              </h2>
            </div>
          </div>
          {/* portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-7 md:gap-y-8 w-full">
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
                className="group"
              >
                <Card className="p-0 ring-0 overflow-hidden shadow-none border-0">
                  <CardContent className="p-0 flex flex-col gap-6">
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                      <a href="#">
                        <img
                          src={item.portfolio_image}
                          alt={item.portfolio_alt ?? item.portfolio_title}
                          className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </a>
                    </div>
                    {item.portfolio_credit && (
                      <p className="text-xs text-muted-foreground">
                        Photo by{' '}
                        <a
                          href={item.portfolio_credit.sourceUrl}
                          className="underline"
                        >
                          {item.portfolio_credit.author}
                        </a>
                        {' · '}
                        <a
                          href={item.portfolio_credit.licenseUrl}
                          className="underline"
                        >
                          {item.portfolio_credit.license}
                        </a>
                      </p>
                    )}
                    <div className="flex flex-col gap-3">
                      <a
                        href="#"
                        className="text-foreground text-2xl font-medium tracking-tighter w-fit"
                      >
                        {item.portfolio_title}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <p>
              Call us, and we'll be happy to assist you in finding your ideal
              products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
