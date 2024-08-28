// AboutUs.js
import React from "react"
import { Link } from "react-router-dom";


const About = () => {
  return (
    < div className="max-w-[1240px] mx-auto pt-40 px-5 lg:px-0 pb-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold  mb-4 font-Rancho">About <span className="text-orange-500">US</span></h1>
        <p className="text-lg lg:text-xl text-yellow-600">
          <b>Experience the Rich Heritage of Bangladesh through Our Handcrafted Artistry</b>
        </p>
      </div>

      {/* Introduction Section */}
      <section className="space-y-8 mb-20">
        <div className="flex justify-center mt-8">
          <img
            src="https://banglacraft.org/wp-content/uploads/2023/01/May.jpg"
            alt="Jute Handicrafts"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center bg-gray-900 border border-gray-200 rounded-lg p-6">
            <h2 className=" text-[var(--primary-color-2)] mb-4 text-3xl  theme_title font-bold font-Rancho">Our Heritage in Jute</h2>
            <p className="text-white">
              At the heart of our collection is the timeless jute, also known as the "Golden Fiber" of Bangladesh. Jute has been woven into our culture and history, providing sustainable and versatile products that serve both functional and aesthetic purposes.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-gray-900 border border-gray-200 rounded-lg p-6">
            <h2 className="font-Rancho text-3xl font-bold text-[var(--primary-color-2)] mb-4">Crafted with Tradition</h2>
            <p className="text-white">
              Our jute handicrafts are created by skilled artisans who have inherited their craft from generations past. Each piece is a testament to their dedication to preserving traditional methods while embracing new designs that appeal to contemporary tastes.
            </p>
          </div>
        </div>

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center space-y-8 lg:space-y-0 mb-20">
        <div >
          <img
            src="https://www.viscata.com/cdn/shop/articles/Artisan_giving_shape_to_jute_braided_rope.jpg?v=1597306742"
            alt="Jute Artisan at Work"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="relative bg-[var(--primary-color-2)] text-[var(--base-color-1)] rounded-lg shadow-lg overflow-hidden mb-20 p-8">
          <h2 className=" font-Rancho text-3xl  theme_title font-bold   mb-4">Meet Our Jute Artisans</h2>
          <p>
            Our artisans are the soul of our jute collection. With years of experience, they have perfected the art of weaving and crafting jute into beautiful, functional items. Each product they create is a blend of tradition, sustainability, and innovation.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-8 lg:space-y-0 mb-20">
        <div className="flex flex-col justify-center bg-gray-900 border border-gray-200 rounded-lg p-6">
          <h2 className="font-Rancho text-3xl font-bold text-[var(--primary-color-2)] mb-4">Sustainability at Our Core</h2>
          <p className="text-white">
            Jute is one of the most eco-friendly materials available. It is biodegradable, requires minimal water, and enriches the soil it grows in. By choosing our jute products, you are making a conscious choice to support sustainable practices.
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center bg-gray-900 border border-gray-200 rounded-lg p-6">
            <h2 className="font-Rancho text-3xl font-bold text-[var(--primary-color-2)] mb-4">Supporting Local Communities</h2>
            <p className="text-white">
              Our commitment goes beyond products. We aim to empower local jute farmers and artisans by providing fair wages and a global platform for their crafts. Your support helps sustain their livelihoods and preserves our cultural heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--primary-color-2)] text-[var(--base-color-1)] rounded-lg shadow-lg overflow-hidden mb-20 p-8">
        < div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="flex flex-col justify-center ">
            <h2 className="font-Rancho text-3xl font-bold mb-4">Why Jute?</h2>
            <p>
              Jute products are not only durable and versatile but also embody a rich cultural heritage. Each item is crafted with care, reflecting the unique stories of the artisans who make them. When you choose jute, you choose quality, sustainability, and a piece of Bangladesh's soul.
            </p>
            <h2 className="font-Rancho text-3xl font-bold mt-20">Why Choose Us?</h2>
            <p>
              By choosing our products, you are not only getting high-quality, handcrafted items but also contributing to a larger cause. Your support helps us keep the rich heritage of Bangladeshi handicrafts alive and thriving.
            </p>
          </div>

          <div>
            <img
              src="https://www.addressbazar.com/assets/images/category/151553.jpg"
              alt="Happy Customers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="text-center mt-16">
        <h2 className="font-Rancho text-2xl lg:text-3xl font-bold text-orange-500 mb-4"><span className="text-white">Celebrate</span> Bangladeshi Artistry with Us</h2>
        <p className="text-[var(--accent-color-1)] mb-8">
          Explore our collection and support our mission to promote the beautiful craftsmanship of Bangladesh.
          <span className="text-white"> ENJOY SHOPPING WITH US!</span>
        </p>
        <Link to={'/shop'}>
          <button className="bg-[var(--primary-color-2)] text-[var(--base-color-1)] px-6 py-3 rounded-lg hover:bg-[var(--primary-color-1)] transition">
            LET'S BUY!
          </button>
        </Link>

      </section>







    </div>
  );
};

export default About;
