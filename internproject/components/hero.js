import Button from './button'
import Image from 'next/image'

export default function Hero () {
  return (
    <main class=''>
      <div class='flex m-0 flex-row justify-center content-center items-center h-full relative'>
        <div class='basis-1/4'>
          <Image
            class='saturate-200 bg-blend-saturation -mt-16'
            src='/left.png'
            width={500}
            height={500}
            alt='photo'
          />
        </div>
        <div class='basis-1/2 self-center grid place-items-center gap-y-4 md:gap-y-7 lg:gap-y-7'>
          <div class='-mt-16'>
            <Image
              class=' saturate-150 bg-blend-saturation'
              src='/text.png'
              width={700}
              height={500}
              alt='photo'
            />
          </div>
          <div class='self-center'>
            <p class='text-center text-xs subpixel-antialiased font-sans sm:text-base md:text-base'>
              Our team combines strategy, design, technology to breathe life
              into your brand. Collaborate with us to leave a lasting impression
              on your audience.
            </p>
          </div>
          <div class='-ml-23'>
            <Button />
          </div>
        </div>
        <div class='basis-1/4'>
          <Image
            class='pt-20 saturate-200 bg-blend-saturation'
            src='/rightimage.png'
            width={500}
            height={300}
            alt='photo'
          />
        </div>
      </div>
      <div class='flex justify-center'>
        <div class='-z-50 container top-0 transform scale-100 absolute w-10/12 h-72 bg-mycolor opacity-70  sm:h-3/4 md:h-3/4 lg:h-full'></div>
      </div>
    </main>
  )
}
