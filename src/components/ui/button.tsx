import Link from 'next/link'
import { IButton } from '../../interface'

const Button = ({ color, title }: IButton) => {
   return (
      <>
         {color ? <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#aebdac] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#677066]"
         >
            {title}
         </a> : <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            {title}
         </a>}
      </>
   )
}

export default Button