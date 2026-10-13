'use client'

import { cn } from 'cn'

import { Badge } from '#/components/ui/badge.tsx'

interface Content1Props {
  className?: string
}

const Content1 = ({ className }: Content1Props) => {
  return (
    <section id="about" className={cn('flex justify-center py-32', className)}>
      <div className="container max-w-5xl">
        <div className="relative grid-cols-1 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div>
              <Badge variant="outline">About Our Store</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                We were established in 1963, and have been serving our customers
                with quality groceries ever since.
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Our store is a family-owned business that has been serving the
                community for over 50 years. We pride ourselves on providing
                high-quality products and exceptional customer service. Our
                knowledgeable staff is always ready to assist you in finding the
                best products for your needs.
              </p>
              <figure className="my-8">
                <img
                  src="/images/grocery-store.jpg"
                  alt="Shelves stocked with groceries and household goods inside a small shop in Mexico"
                  className="aspect-video w-full rounded-md object-cover"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">
                  Photo by{' '}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:Abarrotes,_mercado_Michoac%C3%A1n.jpg"
                    className="underline"
                  >
                    Xanyssel
                  </a>{' '}
                  via Wikimedia Commons, licensed under{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    className="underline"
                  >
                    CC BY-SA 4.0
                  </a>
                  .
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Content1 }
