import Input from 'postcss/lib/input'

export default function Button () {
  return (
    <div>
      <div class='inline-block'>
        <input
          type='email'
          placeholder='Enter your email'
          id='button'
          class='text-xs pl-2 pr-8 py-2  border-0 focus:outline-none rounded-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:pr-22 md:text-base md:py-3  md:pr-28 lg:pr-32 lg:py-3'
        ></input>
      </div>
      <div class='inline-block text-xs -m-16 px-2 py-1.5 border-0 rounded-full border-white w-16 bg-blue-500  text-black cursor-pointer hover:bg-blue-600 sm:text-xs sm:-m-18 md:text-base md:-m-23 md:w-20 lg:text-base'>
        Join Us
      </div>
    </div>
  )
}
