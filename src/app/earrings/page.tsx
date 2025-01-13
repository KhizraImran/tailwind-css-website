import React from 'react'
import Image from 'next/image';
const Earrings = () => {
const  earringData =[
{id: 1, name: 'Chandbali Earrings', price: 4000 , description: ' Graceful Traditional Elegance', image: '/img1.png' },    
{id: 2, name: ' Golden Pearls Hoop', price: 5000 , description: 'Lustrous Pearl Sophistication', image: '/img2.jpg' },   
{id: 3, name: 'Silver Jhumka', price: 3000 , description: ' Timeless Ethnic Charm', image: '/img3.jpeg' },
{id: 4, name: 'Long Party Earrings', price: 6000 , description: 'Glamorous Statement Accessory', image: '/img4.jpg' },
{id: 5, name: 'Golden Kundan Ethnic Jhumkas', price: 8000 , description: 'Glamorous Statement Accessory', image: '/img5.jpg' },
{id: 6, name: 'Silver-Plated Jhumkas', price: 2000 , description: ' Elegant Vintage Touch', image: '/img6.jpg' },    
];
return(
    <div>
        <div className='earrings grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
            {earringData.map((earrings) =>( 
                <div key={earrings.id} className='earrings-card bg-white p-5 rounded-md shadow-md text-center'>
                    <Image src={earrings.image} alt={earrings.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
                    <h3 className='mt-4 text-2xl font-bold'>{earrings.name}</h3>
                    <p className="text-gray-500">{earrings.description}</p>
                    <div className='price text-[#d2691e] text-xl font-semibold mt-2'>${earrings.price}</div>
                    <button className="mt-4 px-4 py-2 bg-[#d2691e] hover:bg-[#612a03] text-white rounded-md">Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
);
};

export default Earrings
