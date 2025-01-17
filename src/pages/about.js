import React, { useEffect, useRef } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Roadmap from '@/components/Roadmap'
import Head from 'next/head';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import profilePic from "../../public/images/siriuswap/logo.gif";
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
          <title>Siriuswap Protocol | About us</title>
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
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Game Finance" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Gameify Your Trades</h2>
              <p className='font-medium'>
              Siriuswap merges decentralized trading with blockchain gaming innovation on the Siriusnet blockchain, offering seamless token swapping, liquidity provision, and yield farming. Join our vibrant community driving the future of finance, where users trade, earn rewards, and level up their crypto journey. Explore decentralized finance (DeFi) with us today!
              </p>
              
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="CyberPunk" className='w-full h-auto rounded-2xl' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl'>
                  <AnimatedNumbers value={32039230} />
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Transactions</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl'>
                  <AnimatedNumbers value={146} />M
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Trade Volume</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl'>
                  <AnimatedNumbers value={120} />M
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>TVL</h2>
              </div>
            </div>
          </div>
          <Roadmap />
        </Layout>
      </main>
    </>
  );
};

export default About;
