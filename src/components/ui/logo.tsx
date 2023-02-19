import Img from 'next/image';
import Link from 'next/link';

const Logo = () => {
   return (
      <div className="ml-4 flex lg:ml-0">
         <Link href="/">
            <span className="sr-only">Your Company</span>
            <Img
               width={100}
               height={100}
               className="h-16 w-auto"
               src="https://res.cloudinary.com/dfta3fn6p/image/upload/v1676822205/selassie/deco/logo-rmbg_e8ffgk.png"
               alt=""
            />
         </Link>
      </div>
   )
}

export default Logo;
