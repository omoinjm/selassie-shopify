import Img from 'next/image'
import { ArrowRIght } from '../components/ui/svg'

export default function Example() {
  return (
    <div className="bg-white py-20 h-screen">
      <div className="px-0 py-0">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-96">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={12} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#383c37" />
                <stop offset={1} stopColor="#73ff03" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-64 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#383c37] sm:text-4xl">
              Improve you livity.
              <br />
              Start using our product.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#aebdac]">
              The natural supplement goes hand in hand with your diet. The more your diet is alkalized, the more benefits your body will reap.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="/shop" className="flex text-base font-semibold leading-7 text-[#383c37] gap-x-2 justify-center items-center">
                Shop now <span className="transition ease-in-out delay-150 hover:translate-x-2"><ArrowRIght /></span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Img
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://res.cloudinary.com/dfta3fn6p/image/upload/v1676825000/selassie/deco/week3_10_1944x_exnpua.webp"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
