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

const SlideImage = ({ image, altText = '', idx }) => {
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
  const images = [
    { src: '/images/iPhone12Pro1.png', alt: 'Mobile device mockup 1' },
    { src: '/images/iPhone12.png', alt: 'Mobile device mockup 2' },
    { src: '/images/iPhone12Pro.png', alt: 'Mobile device mockup 3' },
  ];

  return (
    <div className=" container images-container">
      {images.map(({ src, alt }, idx) => (
        <SlideImage key={src} image={src} altText={alt} idx={idx} />
      ))}
    </div>
  );
};

export default SlideComponent
