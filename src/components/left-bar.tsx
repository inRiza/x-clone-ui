'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const menuList = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: 'icons/home.svg',
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mrizainf/',
    icon: '/textures/linkedin.svg',  
  },
  {
    id: 3,
    name: 'GitHub',
    link: 'https://github.com/inRiza',
    icon: '/textures/github-.svg',
  },
  {
    id: 4,
    name: 'Gmail',
    link: 'mailto:13523164@std.stei.itb.ac.id',
    icon: '/textures/gmail.svg',
  },
  {
    id: 5,
    name: 'Instagram',
    link: 'https://www.instagram.com/rizainfird/',
    icon: '/textures/instagram.svg',
  }
];

const LeftBar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePostClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      <div className='flex flex-col gap-4 text-lg'>
        <Link href="/" className='p-2 rounded-full'>
          <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>
        <div className='flex flex-col'>
          {menuList.map((item) => (
            <Link href={item.link} className='p-2 rounded-full hover:bg-hover-gray flex items-center gap-4' key={item.id}>
              <Image 
                src={item.icon} 
                alt={item.name} 
                width={24} 
                height={24} 
              />
              <span className={`hidden text-xl xxl:inline ${item.id === 1 ? 'font-bold' : ''}`}>{item.name}</span>
            </Link>
          ))}
        </div>
        <Link 
          href="/" 
          onClick={handlePostClick}
          className={`xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${isAnimating ? 'animate-post-click' : ''}`}
        >
          <Image src="icons/post.svg" alt="post" width={24} height={24}/>
        </Link>
        <Link 
          href="/" 
          onClick={handlePostClick}
          className={`hidden xxl:block bg-white text-lg text-black rounded-full font-bold text-based py-2 px-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${isAnimating ? 'animate-post-click' : ''}`}
        >
          Hello!
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full relative overflow-hidden'>
            <Link href="/" className=''>
              <Image src="/general/avatar.png" alt="profile" fill/>
            </Link>
          </div>
          <div className='hidden xxl:flex flex-col'>
            <span className='font-bold'>Rizain</span>
            <span className='text-sm text-text-gray'>@rizainfird</span>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default LeftBar