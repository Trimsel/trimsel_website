import React, { useRef, useEffect } from 'react';

// const Image = ({ image, idx }) => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(`slide-in-${idx}`);
//           observer.unobserve(entry.target);
//         }
//       });
//     });
//     observer.observe(imageRef.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, [imageRef, idx]);

//   return (
//     <img
//       ref={imageRef}
//       src={image}
//       alt=""
//       className="slide-in"
//     />
//   );
// };

const Image = ({ image, altText, idx }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`slide-in-${idx}`);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, [imageRef, idx]);

  return (
    <img
      ref={imageRef}
      src={image}
      alt={altText}
      className="slide-in"
      loading="lazy"
    />
  );
};

const SlideComponent = () => {
    const images = ['/images/iPhone12Pro1.png', '/images/iPhone12.png', '/images/iPhone12Pro.png'];

    return (
        <div className = ' container images-container'>
            {images.map((image, idx) => (
            <Image key={idx} image={image} idx={idx} />
        ))}
        </div>
    );
};

export default SlideComponent