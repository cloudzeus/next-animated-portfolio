import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 lg:justify-center lg:items-center">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 lg:justify-center mr-10 relative">
        <Image
          src="/heroVector.svg"
          alt="heroVector"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col lg:justify-center mt-10 lg:mt-2 gap-8">
        {/* TITLE */}
        <h1 className="font-black text-blue-900 text-4xl md:text-5xl xl:text-6xl">
          Mega Parking in Peiraeus, Perfect location remarkable service
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit enim
          veritatis nihil atque iste corporis labore incidunt, alias modi
          consectetur mollitia nesciunt animi cupiditate nemo, itaque inventore
          corrupti quos omnis!
        </p>
        {/* ACTION BUTTONS */}
        <div className="flex gap-4 ">
          <button className="p-3 rounded text-xs ring-1 ring-red-800 bg-red-800 text-white">
            View My Work
          </button>
          <button className="p-3 text-xs rounded ring-1 ring-blue-900 bg-blue-900 text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
