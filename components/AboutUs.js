import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from './icons/ArrowRightIcon';

const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/images/about-us-team.jpg" // Placeholder, replace with actual image path
              alt="About Us Team"
              fill
              style={{ objectFit: 'cover' }}
              quality={90}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">Our Journey</span>
            </div>
          </div>
        </div>
        <div className="lg:order-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About Our Company
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            We are a passionate team dedicated to delivering exceptional results. With years of experience and a commitment to innovation, we help businesses thrive in a dynamic market. Our mission is to provide tailored solutions that drive growth and foster long-term success.
          </p>
          <ul className="text-left text-gray-600 space-y-3 mb-8 max-w-md mx-auto lg:mx-0">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Client-focused approach</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Innovative solutions</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Experienced professionals</span>
            </li>
          </ul>
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out transform hover:bg-brand-dark hover:-translate-y-1"
          >
            Meet Our Team
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

