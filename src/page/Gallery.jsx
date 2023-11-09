import img5 from '../assets/images/5.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img1 from '../assets/images/1.jpg';
import img4 from '../assets/images/4.jpg';






const Gallery = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-2xl lg:text-5xl font-bold text-[#D31027]'>OUR GALLERY</h1>
        <p className='text-xl lg:text-2xl py-4 font-bold'>Discover the essence of extraordinary stays through our captivating gallery. Each image tells a story of comfort, luxury, and unforgettable moments</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img data-aos="zoom-out" data-aos-duration="1500" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={img1} alt="/" />
            <img data-aos="zoom-out" data-aos-duration="1500" className='w-full h-full object-cover' src={img2} alt="/" />
            <img data-aos="zoom-out" data-aos-duration="1500"  className='w-full h-full object-cover' src={img3} alt="/" />
            <img data-aos="zoom-out" data-aos-duration="1500"  className='w-full h-full object-cover' src={img4} alt="/" />
            <img data-aos="zoom-out" data-aos-duration="1500"  className='w-full h-full object-cover' src={img5} alt="/" />
        </div>
    </div>
    );
};

export default Gallery;