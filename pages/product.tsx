import Image from 'next/image'
import faceIcons from '../images/Frame 21183 (4).png'
import mywallet from '../images/My profile.png'
import roundGreen from '../images/Ellipse 60.png'
import multipleProfile from '../images/Frame 21193.png'
import bottomProfile from '../images/My profile (1).png'
import circle from '../images/Ellipse 61.png'
import logo from '../images/4.png'

export default function Product() {

    return  <div className="items-center container max-w-6xl mx-auto overflow-x-hidden pt-12 pb-12">
    {/* main container */}
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>


  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  

  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  

  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  
  




</div>
  </div>;
  }
  