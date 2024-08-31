import React from 'react';
import Image from 'next/image';

export default function Achievement() {
  return (
   <div className='bg-[#FAFDFF]'>
     <div className=" text-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 transition-colors duration-300 ">Our Achievements</h2>
          <p className="text-base sm:text-lg text-primary max-w-3xl mx-auto transition-colors duration-300 ">
            Over the years, we have built a legacy of successful asset management by consistently delivering value to our clients. Our expertise in the industry, coupled with our innovative strategies, has enabled us to manage and grow substantial portfolios with a focus on long-term financial growth.
          </p>
        </section>
        
        <div className="space-y-12 sm:space-y-20">
          <AchievementSection
            imageUrl="https://i.ibb.co/djcTRSS/design1.png"
            altText="Modern office building"
            description="Our strategic investments in commercial real estate have resulted in significant returns, contributing to the growth and sustainability of our clients' assets. We pride ourselves on identifying high-value opportunities in key markets."
            isReversed={false}
          />
          
          <AchievementSection
            imageUrl="https://i.ibb.co/djcTRSS/design1.png"
            altText="Innovative architectural design"
            description="Through our innovative approach to asset management, we have successfully diversified portfolios across various sectors, including residential, commercial, and industrial properties, ensuring balanced and resilient asset growth."
            isReversed={true}
          />
        </div>
      </div>
    </div>
   </div>
  );
}

function AchievementSection({ imageUrl, altText, description, isReversed }) {
  return (
    <div className={`flex flex-col ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center gap-12 sm:gap-24`}>
      <div className="sm:w-1/2 w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={altText}
          width={700}
          height={300}
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="sm:w-1/2 w-full">
        <p className="text-base sm:text-lg leading-relaxed text-primary transition-colors duration-300 ">{description}</p>
      </div>
    </div>
  );
}