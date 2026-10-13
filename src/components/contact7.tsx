import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { cn } from 'cn'

interface Contact7Props {
  title?: string
  description?: string
  emailLabel?: string
  emailDescription?: string
  email?: string
  officeLabel?: string
  officeDescription?: string
  officeAddress?: string
  phoneLabel?: string
  phoneDescription?: string
  phone?: string
  chatLabel?: string
  chatDescription?: string
  chatLink?: string
  className?: string
}

const Contact7 = ({
  title = 'Contact Us',
  description = 'We would love to hear from you! Please reach out to us through any of the following methods.',
  emailLabel = 'Email',
  emailDescription = 'Our team is ready to assist you with any inquiries.',
  email = 'hello@example.com',
  officeLabel = 'Our Store Location',
  officeDescription = 'Visit us at our store for a personalized experience.',
  officeAddress = '1 Eagle St, Brisbane, QLD, 4000',
  phoneLabel = 'Phone',
  phoneDescription = 'Our store is open from 9am to 9pm, Sunday to Friday. Call us during these hours for assistance.',
  phone = '(123) 456-7890',
  chatLabel = 'Our Store Hours',
  chatDescription = 'We are open 9am to 9pm, Sunday to Friday. ',
  chatLink = 'Check out our weekly deals and promotions from our catalog',
  className,
}: Contact7Props) => {
  return (
    <section
      id="contact"
      className={cn('py-32 flex justify-center', className)}
    >
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-card p-8">
              <Mail className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{emailLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {emailDescription}
              </p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
            <div className="rounded-xl bg-card p-8">
              <MapPin className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{officeLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {officeDescription}
              </p>
              <a href="#" className="hover:underline">
                {officeAddress}
              </a>
            </div>
            <div className="rounded-xl bg-card p-8">
              <Phone className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{phoneLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {phoneDescription}
              </p>
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </div>
            <div className="rounded-xl bg-card p-8">
              <MessageCircle className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{chatLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {chatDescription}
              </p>
              <a href="#" className="hover:underline">
                {chatLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact7 }
