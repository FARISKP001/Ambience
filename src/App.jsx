import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import main from './assets/main.jpg'
import FrozenMeat from './assets/Frozen Meat.jpg'
import Chocolates from './assets/Chocolates.jpg'
import Grains from './assets/Grains.jpg'
import Nuts from './assets/Nuts.jpg'
import vegs from './assets/vegs.jpg'
import coc from './assets/coc.jpg'

const navigation = [
  { name: 'Products', href: '#products' },
  { name: 'About Us', href: '#about' }, // <-- new link to footer section
  
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* === Header === */}
      <header className="h-14 bg-[#e6f7ec] dark:bg-[#203325] shadow-sm flex items-center justify-between px-4 sm:px-6">
      
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

      {/* === Hero Section (full bg image) === */}
<div className="relative isolate px-0 pt-0">
  <div className="relative h-[32rem] sm:h-[40rem] lg:h-[44rem]">
    <img src={main} alt="Ambience Trading" className="absolute inset-0 h-full w-full object-cover" />
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
        id="products"
        className="relative bg-[#82C26E] dark:bg-[#203325] pt-10 pb-16 scroll-mt-16 -mt-px border-t border-transparent"
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
              <img src={Grains} alt="Grains" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Grains</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We supply a wide variety of fresh and nutritious grains to meet both household and business needs. From rice and pulses to specialty cereals, our grains are carefully sourced to ensure quality, taste, and consistency. Whether you’re stocking up for everyday cooking or bulk supply, we deliver trusted staples that form the heart of every meal.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <img src={vegs} alt="Vegetables" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Vegetables</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We provide a wide range of fresh vegetables to keep your meals wholesome and healthy. Carefully selected and delivered with care, our vegetables retain their natural taste and nutrients. From everyday staples to seasonal specialties, we ensure quality produce that supports both home cooking and business needs.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <img src={FrozenMeat} alt="Frozen Meats" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frozen Meats</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  We supply a wide variety of fresh and nutritious grains to meet both household and business needs. From rice and pulses to specialty cereals, our grains are carefully sourced to ensure quality, taste, and consistency. Whether you’re stocking up for everyday cooking or bulk supply, we deliver trusted staples that form the heart of every meal.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <img src={Chocolates} alt="Chocolates" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Chocolates</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Our chocolate collection is designed to delight every taste bud — from classic favorites to premium indulgences. Whether for personal enjoyment, retail shelves, or gifting, we provide rich, smooth chocolates sourced from trusted brands. Every piece is crafted to bring joy, sweetness, and satisfaction, making life’s little moments extra special.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <img src={Nuts} alt="Nuts" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nuts</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Our premium selection of nuts offers the perfect blend of taste and nutrition. From crunchy almonds and cashews to wholesome peanuts and pistachios, every pack is sourced for freshness and quality. Whether for healthy snacking, cooking, or bulk supply, our nuts bring natural energy and rich flavor to your table.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 shadow-lg bg-white dark:bg-gray-900">
              <img src={coc} alt="Soft Drinks" className="h-48 w-full object-cover" />
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

      {/* === About Us (Footer) === */}
      <footer
        id="about"
        className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-black/5 dark:border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Card */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 backdrop-blur">
              <h3 className="text-m font-bold text-gray-900 dark:text-white">
                AMBIENCE GENERAL TRADING
              </h3>
             
              <div className="mt-4 h-px w-12 bg-gray-300 dark:bg-white/20" />
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">ABUDHABI</span>
                <br />
                <span className="font-semibold">MUSSAFAH 457894</span>
                <br />
                Office no 45
                <br />
                Building no : 19A
              </p>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 backdrop-blur">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Mobile:{" "}
                <a href="tel:71564675774" className="underline hover:text-emerald-600 dark:hover:text-emerald-400">
                  +971564675774
                </a>
                <br />
                Telephone:{" "}
                <a href="tel:9545415121" className="underline hover:text-emerald-600 dark:hover:text-emerald-400">
                  +971558045905
                </a>
              </p>
              <div className="mt-4 flex gap-2">
                
                <a
                  href="https://wa.me/+971558045905"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-300/50 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            
          </div>
{/* Disclaimer */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Disclaimer</h2>
          <p className="leading-relaxed italic">
            Product details and images are for informational purposes only 
            and subject to change without notice.
          </p>
        </div>
      
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ambience General Trading — Abu Dhabi
            </p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
