import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import main from './assets/main.jpg'
import FrozenMeat from './assets/Frozen Meat.webp'
import Chocolates from './assets/chocolate.webp'
import Grains from './assets/Grains.webp'
import Nuts from './assets/Nuts.webp'
import vegs from './assets/vegs.webp'
import coc from './assets/coc.webp'

const navigation = [
  { name: 'Home', href: '#home' }, 
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* === Header === */}
     <header className="fixed top-0 left-0 w-full h-14 bg-[#ffdab9] dark:bg-[#203325] shadow-sm flex items-center justify-between px-4 sm:px-6 z-50">
        {/* Stylish Company Name */}
        <div className="flex items-center">
          <span className="text-2xl font-extrabold tracking-wide 
                         bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 
                         bg-clip-text text-transparent">
            Ambience
          </span>
        </div>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ambience</span>
              {/* place your logo here if you have one */}
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span className="text-sm font-semibold text-transparent">.</span>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ambience</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
<div className="pt-14"></div>
      {/* === Hero Section === */}
<div id="home" className="relative isolate px-0 pt-0">
  <div className="relative h-[32rem] sm:h-[40rem] lg:h-[44rem]">
   <LazyLoadImage src={main} alt="Ambience Trading" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
        Supplying your needs, on time
      </h1>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200">
        From everyday essentials to business supplies, we deliver what you need, when you need it.
      </p>
      <a
        href="#products"
        className="mt-8 inline-flex items-center rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-white"
      >
        View Products
      </a>
    </div>
  </div>
</div>

      {/* === Products === */}
      <section
  id="products" aria-label="Our Products"
  className="relative bg-[#9ab973] dark:bg-[#203325] pt-10 pb-16 scroll-mt-16 -mt-px border-t border-transparent"
>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-gray-800/80 dark:text-gray-300">
              Browse through our range of essentials
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={Grains} alt="Grains" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Grains</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We supply a wide variety of fresh and nutritious grains to meet both household and business needs. From rice and pulses to specialty cereals, our grains are carefully sourced to ensure quality, taste, and consistency. Whether you’re stocking up for everyday cooking or bulk supply, we deliver trusted staples that form the heart of every meal.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={vegs} alt="Vegetables" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Vegetables</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We provide a wide range of fresh vegetables to keep your meals wholesome and healthy. Carefully selected and delivered with care, our vegetables retain their natural taste and nutrients. From everyday staples to seasonal specialties, we ensure quality produce that supports both home cooking and business needs.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={FrozenMeat} alt="Frozen Meats" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frozen Meats</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We supply a wide variety of fresh and nutritious grains to meet both household and business needs. From rice and pulses to specialty cereals, our grains are carefully sourced to ensure quality, taste, and consistency. Whether you’re stocking up for everyday cooking or bulk supply, we deliver trusted staples that form the heart of every meal.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={Chocolates} alt="Chocolates" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Chocolates</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Our chocolate collection is designed to delight every taste bud — from classic favorites to premium indulgences. Whether for personal enjoyment, retail shelves, or gifting, we provide rich, smooth chocolates sourced from trusted brands. Every piece is crafted to bring joy, sweetness, and satisfaction, making life’s little moments extra special.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={Nuts} alt="Nuts" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nuts</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Our premium selection of nuts offers the perfect blend of taste and nutrition. From crunchy almonds and cashews to wholesome peanuts and pistachios, every pack is sourced for freshness and quality. Whether for healthy snacking, cooking, or bulk supply, our nuts bring natural energy and rich flavor to your table.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <LazyLoadImage src={coc} alt="Soft Drinks" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Soft Drinks</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Our soft drinks are crafted to deliver instant refreshment whenever you need it. Packed with crisp flavors and a lively fizz, every sip is a perfect pick-me-up to keep your day moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === About Us Section === */}
      <section
  id="about"
  className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-black/5 dark:border-white/10"
>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">AMBIENCE GENERAL TRADING LLC</span> has been a pioneer
            in the region since 2025 and has been responsible for the supply of food
            to many supermarkets and tradings in the UAE.
          </p>

          <div className="mt-8 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur inline-block">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Working Hours</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Monday – Saturday:</strong> 8:00 AM – 6:00 PM <br />
              <strong>Friday:</strong> 8:00 AM – 12:00 PM
            </p>
          </div>
        </div>
      </section>
{/* === Contact Us (Footer Bar) === */}
<section
  id="contact"
  className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12"
>
  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 px-6 text-center md:text-left">
    
    {/* Address */}
    <div>
      <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
        <FaMapMarkerAlt className="text-gray-300" /> Address
      </h3>
      <p className="text-gray-300 leading-relaxed">
        ABU DHABI <br />
        MUSSAFAH 45 <br />
        Office no: 45 <br />
        Building no: 19A
      </p>
    </div>

    {/* Phone */}
    <div>
      <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
        <FaPhoneAlt className="text-gray-300" /> Phone
      </h3>
      <p className="text-gray-300">
        Mobile:{" "}
        <a href="tel:+971564675774" className="underline hover:text-white">
          +971 56 467 5774
        </a>
      </p>
      <p className="text-gray-300">
        Telephone:{" "}
        <a href="tel:+971558045905" className="underline hover:text-white">
          +971 55 804 5905
        </a>
      </p>
    </div>

    {/* Email */}
    <div>
      <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
        <FaEnvelope className="text-gray-300" /> Email
      </h3>
      <p className="text-gray-300">
        <a href="mailto:hr@ambience.ae" className="underline hover:text-white">
          hr@ambience.ae
        </a>
      </p>
    </div>

    {/* WhatsApp */}
    <div>
      <h3 className="text-lg font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
        <FaWhatsapp className="text-gray-300" /> WhatsApp
      </h3>
      <p>
        <a
          href="https://wa.me/+971558045905"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-white text-gray-300"
        >
          Message Us
        </a>
      </p>
    </div>
  </div>
</section>
{/* === Copyright Bar === */}
<div className="bg-gray-900 text-gray-400 text-center py-4 text-sm border-t border-gray-700">
  © {new Date().getFullYear()} AMBIENCE GENERAL TRADING LLC — All Rights Reserved.
</div>

    </div>
  )
}
