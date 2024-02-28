import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import image3 from "../../public/images/siriuswap/image3.jpg";
import image4 from "../../public/images/siriuswap/image4.png";
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect';
import TopNav from '@/components/TopNav';
import BotNav from '@/components/BotNav';

const FramerImage = motion(Image);

const FeaturedProject = ({ category, title, summary, img, link, github }) => {
  return (
    <article className="max-w-[90%] mx-auto flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark 
    dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
      <div className='absolute top-0 right-0 z-[-10] w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] ' />
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}} 
        transition={{duration:0.2}}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
         />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{category}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Project</Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, category, img, link }) => {
  return (
    <article className="max-w-[90%] mx-auto flex flex-col items-center justify-center rounded-2xl border 
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">
      
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{category}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        </div>
      </div>
      <div className='absolute top-0 right-0 z-[-10] w-[101%] h-[103%] rounded-[2rem] 
      bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}} 
        transition={{duration:0.2}}
         />
      </Link>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
          <title>Siriuswap Protocol | Info</title>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Welcome to Siriuswap - Your gateway to decentralized exchange on the Siriusnet Blockchain. Learn about our features, team, and vision." />
          <meta name="keywords" content="Siriuswap, decentralized exchange, Siriusnet Blockchain, MCD, cryptocurrency, DEX, Ethereum Virtual Machine" />
          <meta name="author" content="Michael Tarimo| michaeltarimo4@gmail.com" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Siriuswap Info Page" />
          <meta property="og:description" content="Welcome to Siriuswap - Your gateway to decentralized exchange on the Siriusnet Blockchain. Learn about our features, team, and vision." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://info.siriuswap.org" />
          <meta property="og:image" content="https://example.com/your-image.jpg" />
          <meta property="og:site_name" content="Siriuswap" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Siriuswap Info Page" />
          <meta name="twitter:description" content="Welcome to Siriuswap - Your gateway to decentralized exchange on the Siriusnet Blockchain. Learn about our features, team, and vision." />
          <meta name="twitter:image" content="https://example.com/your-image.jpg" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-10'>
          <TopNav />
          <BotNav />
        </Layout>

        <div className='grid grid-cols-12 gap-5 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title="$0.00M"
              img={image3}
              summary=""
              link="https://scan.siriusnet.io"
              github="/"
              category="Total Value Locked"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title="$0.00M"
              img={image4}
              summary=""
              link="/"
              github="/"
              category="Volume 24H"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
