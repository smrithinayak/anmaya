/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const DotsLayout = ({ children }) => {
  return (
    <div className="dots-layout relative overflow-hidden bg-[#000000]">
      <div className="absolute inset-0">
        {/* Dots */}
        <div className="dots"></div>
      </div>
      <div className="relative z-10">
        {children} 
      </div>
      <style jsx>{`
        .dots {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
          background-size: 20px 20px; 
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default DotsLayout;