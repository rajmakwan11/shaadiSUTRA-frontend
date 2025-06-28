const FloatingFlowerEffect = () => {
  return (
    <>
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }

        .floating-petal {
          position: fixed;
          width: 35px;
          height: 35px;
          pointer-events: none;
          z-index: 1;
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>

      {Array.from({ length: 25 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 5;

        return (
          <img
            key={i}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcbhn3h-2915bf24-ebd9-43bf-bd0b-97eb4a2f8231.png/v1/fill/w_880,h_908/red_rose_on_a_transparent_background__by_prussiaart_dcbhn3h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvZGNiaG4zaC0yOTE1YmYyNC1lYmQ5LTQzYmYtYmQwYi05N2ViNGEyZjgyMzEucG5nIiwiaGVpZ2h0IjoiPD05MjgiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvcHJ1c3NpYWFydC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.gdPslthkOYiIb7Mv24Fq2f4CAZJxmSK3lC9SiC7Db9s"
            className="floating-petal"
            style={{
              left: `${left}%`,
              top: `-${Math.random() * 200}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            alt="petal"
          />
        );
      })}
    </>
  );
};

export default FloatingFlowerEffect;
