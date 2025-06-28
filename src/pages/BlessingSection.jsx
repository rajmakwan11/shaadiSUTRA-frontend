import elephant_left from "../assets/images/elephant-left.gif";

const BlessingSection = () => {
  return (
    <section className="relative bg-pink-50 py-16 px-4 overflow-hidden">
      <div className="flex justify-center items-end relative z-10 gap-2 md:gap-10">
        {/* Left Elephant */}
        <div className="w-[200px] md:w-[260px] overflow-hidden">
          <img
            src={elephant_left}
            alt="Left Elephant"
            className="w-full animate-trunk"
          />
        </div>

        {/* Ganpati Bappa */}
        <div className="z-20">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/055/027/609/small_2x/illustration-of-lord-ganesh-or-ganpati-bappa-free-png.png"
            alt="Lord Ganesha"
            className="h-40 md:h-56 animate-fade-in drop-shadow-xl"
          />
        </div>

        {/* Right Elephant (flipped) */}
        <div className="w-[200px] md:w-[260px] overflow-hidden scale-x-[-1]">
          <img
            src={elephant_left}
            alt="Right Elephant"
            className="w-full animate-trunk-reverse"
          />
        </div>
      </div>
    </section>
  );
};

export default BlessingSection;
