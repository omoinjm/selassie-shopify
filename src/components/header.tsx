import { Popover } from '@headlessui/react'
import Banner from './ui/banner'
import Button from './ui/button'
import Cart from './ui/cart'
import Logo from './ui/logo'
import Search from './ui/search'

const navigation = {
   pages: [
      { name: 'Shop', href: '/shop' },
      { name: 'Blog', href: '/blog' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
   ],
}

export default function Header() {

   return (
      <div className="bg-white fixed z-40 w-screen">

         <header className="relative bg-white">
            <Banner />

            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="border-b border-gray-200">
                  <div className="flex h-16 items-center">

                     {/* Logo */}
                     <Logo />

                     {/* Flyout menus */}
                     <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                           {navigation.pages.map((page) => (
                              <a
                                 key={page.name}
                                 href={page.href}
                                 className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                              >
                                 {page.name}
                              </a>
                           ))}
                        </div>
                     </Popover.Group>


                     {/* RIGHT SIDE */}
                     <div className="ml-auto flex items-center">
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                           <Button title='Join now' color={false} />
                           <Button title='Sign in' color={true} />
                        </div>

                        {/* Search */}
                        <Search />

                        {/* Cart */}
                        <Cart />
                     </div>

                  </div>
               </div>
            </nav>
         </header>
      </div>
   )
}
