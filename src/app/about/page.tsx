import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/about-img.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <p>Welcome to Delicate Earrings, where elegance meets artistry in every design. Our curated collection celebrates the timeless beauty of earrings, each piece meticulously crafted to bring out the essence of sophistication and charm. From understated studs to bold statement pieces, our range is designed to suit every occasion and style. Whether you&apos; re looking to add a touch of glamour to your everyday look or searching for that perfect accessory to complete your evening ensemble, Delicate Earrings has something special just for you. Indulge in the luxury of fine craftsmanship and elevate your style with our exquisite pieces.</p>
      </div>
    </section>
  );
};

export default About;
