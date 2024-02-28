// index.js
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/siriuswap/image1.png';
import Link from 'next/link';
import {LinkArrow} from '@/components/Icons'
import lightBulb from "../../public/images/siriuswap/logo.gif"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  const text = 'Siriuswap Protocol';
  
  return (
    <>

      <Head>
          <title>Home | Siriuswap Protocol</title>
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
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-4'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Sphere' className='w-full h-auto lg:hidden md:inline-block md:w-full rounded' 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text={text}
                className='text-5xl text-left xl:text-4xl lg:text-center lg:text-4xl md:text-4xl sm:text-2xl' // Adjust text size here
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Gameify your crypto experience: Trade, earn rewards, and level up on the forefront of decentralized cryptocurrency trading with Siriusnet's innovative gaming-inspired blockchain.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="https://swap.siriusnet.io" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                Trading <LinkArrow className={"w-6 ml-1"}/>

                </Link>
                <Link href="#"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Consensus</Link>
              </div>
            </div>
          </div>
        </Layout>


        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="mbegu_idea" className='w-full h-auto'/>
        </div>
      </main>
    </>
  );
}
