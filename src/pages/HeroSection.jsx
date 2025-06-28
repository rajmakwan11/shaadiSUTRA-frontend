import bgImage from '../assets/images/hero-background.jpg';
import coupleImage from '../assets/images/couple.png';

const HeroSection = () => {
  return (
    <>
      {/* Inline CSS for animation */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      {/* Main Section */}
      <div
        className="w-full bg-cover bg-center relative overflow-hidden" // added overflow-hidden
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-20 sm:py-24 text-white">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-yellow-400 leading-snug mb-4">
              Create Personalized Wedding Invitations in Minutes
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-light text-white mb-6">
              Celebrate your special day with beautiful, custom-made digital wedding cards.
              Choose from elegant templates, add your details, and share directly via WhatsApp.
            </p>
            <button
              onClick={() => {
              const el = document.getElementById('templates');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-yellow-400 text-white font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
          >
          Start Generating Now →
        </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full flex justify-center relative z-10 px-4">
            <img
              src={coupleImage}
              alt="Wedding Couple"
              className="w-60 sm:w-72 md:w-80 lg:w-96 fade-in-up object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
