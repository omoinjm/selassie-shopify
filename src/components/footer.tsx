import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Img from 'next/image'
import Link from 'next/link'
import { footerLinks } from './data'
import Button from './ui/button'
import { Facebook, LinkedIn, Telephone, Twitter, YouTube } from './ui/svg'

export default function Footer() {
   return (
      <footer className="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
         <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                  <div className="mb-10 w-full">
                     <Link
                        href="/"
                        className="mb-6 inline-block max-w-[160px]"
                     >
                        <Img
                           src="https://res.cloudinary.com/dfta3fn6p/image/upload/v1676822205/selassie/deco/logo-rmbg_e8ffgk.png"
                           alt="logo"
                           className="max-w-full"
                           width={50}
                           height={50}
                        />
                     </Link>
                     <p className="mb-7 text-base text-body-color">
                        Your Health is our priority. All our products are for the healing of the nation.
                     </p>
                     <p className="flex items-center text-sm font-medium text-dark">
                        <span className="mr-3 text-primary">
                           <Telephone />
                        </span>
                        <span>+012 (345) 678 99</span>
                     </p>
                  </div>
               </div>

               {footerLinks?.map((footer: any, index: number) => {
                  return (
                     <div key={index} className="w-full px-4 sm:w-1/2 lg:w-2/12">
                        <div className="mb-10 w-full">
                           <h4 className="mb-9 text-lg font-semibold text-dark">{footer.title}</h4>
                           <ul>
                              {footer?.links.map((link: any, index: number) => {
                                 return (
                                    <li key={index}>
                                       <Link
                                          href={link.href}
                                          className="mb-2 inline-block text-base leading-loose text-body-color hover:text-primary" rel="noreferrer"
                                       >
                                          {link.name}
                                       </Link>
                                    </li>
                                 )
                              })}
                           </ul>
                        </div>
                     </div>
                  )
               })}

               <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-[#383c37] sm:text-4xl">Subscribe to our newsletter.</h2>
                  <p className="mt-4 text-lg leading-8 text-[#aebdac]">
                     Receive updates on new products, exclusive promotions, new shipping locations and more.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                     <label htmlFor="email-address" className="sr-only">
                        Email address
                     </label>
                     <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border border-[#aebdac] bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-[#383c37] placeholder-gray-500 shadow-sm focus:border-[#383c37] focus:ring-[#383c37]"
                        placeholder="Enter your email"
                     />
                     <Button title='Subscribe' color={true} />
                  </div>
               </div>

               {/* <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                  <div className="mb-10 w-full">
                     <h4 className="mb-9 text-lg font-semibold text-dark">Follow Us On</h4>
                     <div className="mb-6 flex items-center">
                        <Link
                           href="https://www.facebook.com"
                           target="_blank"
                           rel="noreferrer"
                           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-[#aebdac] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                        >
                           <Facebook />
                        </Link>
                        <a
                           href="https://www.twitter.com"
                           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-[#aebdac] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                        >
                           <Twitter />
                        </a>
                        <a
                           href="javascript:void(0)"
                           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                        >
                           <YouTube />
                        </a>
                        <a
                           href="javascript:void(0)"
                           className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                        >
                           <LinkedIn />
                        </a>
                     </div>
                     <p className="text-base text-body-color">&copy; 2023 Selassie</p>
                  </div>
               </div> */}
            </div>
         </div>

         <div>
            <span className="absolute left-0 bottom-0 z-[-1]">
               <svg
                  width="217"
                  height="229"
                  viewBox="0 0 217 229"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                     fill="url(#paint0_linear_1179_5)"
                  />
                  <defs>
                     <linearGradient
                        id="paint0_linear_1179_5"
                        x1="76.5"
                        y1="281"
                        x2="76.5"
                        y2="1.22829e-05"
                        gradientUnits="userSpaceOnUse"
                     >
                        <stop stop-color="#3056D3" stop-opacity="0.08" />
                        <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                     </linearGradient>
                  </defs>
               </svg>
            </span>
            <span className="absolute top-10 right-10 z-[-1]">
               <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                     fill="url(#paint0_linear_1179_4)"
                  />
                  <defs>
                     <linearGradient
                        id="paint0_linear_1179_4"
                        x1="-1.63917e-06"
                        y1="37.5"
                        x2="75"
                        y2="37.5"
                        gradientUnits="userSpaceOnUse"
                     >
                        <stop stop-color="#73ff03" stop-opacity="0.31" />
                        <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                     </linearGradient>
                  </defs>
               </svg>
            </span>
         </div>
      </footer>
   )
}

function Example() {
   return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
               <div className="max-w-xl lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                     Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                     dolore.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                     <label htmlFor="email-address" className="sr-only">
                        Email address
                     </label>
                     <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border border-white/10 bg-white/5 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter your email"
                     />
                     <button
                        type="submit"
                        className="flex-none rounded-md bg-indigo-500 py-1.5 px-3.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                     >
                        Subscribe
                     </button>
                  </div>
               </div>
               <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start">
                     <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                     </div>
                     <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                     <dd className="mt-2 leading-7 text-gray-400">
                        Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                     </dd>
                  </div>
                  <div className="flex flex-col items-start">
                     <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                     </div>
                     <dt className="mt-4 font-semibold text-white">No spam</dt>
                     <dd className="mt-2 leading-7 text-gray-400">
                        Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
         <svg
            className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
            viewBox="0 0 1155 678"
            fill="none"
         >
            <path
               fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
               fillOpacity=".3"
               d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
               <linearGradient
                  id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
               >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
               </linearGradient>
            </defs>
         </svg>
      </div>
   )
}
