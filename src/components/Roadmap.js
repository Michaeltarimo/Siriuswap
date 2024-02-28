import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl dark:text-primary sm:text-xl xs:text-lg'>{position}</h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-60'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>ROADMAP</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Launch Siriuswap 1.0'
            time='Q1-Q2 2024'
            address='Siriusnet Blockchain'
            work='Enhance Siriuswap&quot;s infrastructure for scalability, security, and reliability. Conduct audits, improve performance, and implement monitoring systems.'
          />
          <Details
            position='Enhanced User Experience'
            time='Q3-Q4 2024'
            address='Siriusnet, Blockchain'
            work='Prioritize UX enhancements, streamline trading, optimize UI, and introduce intuitive features. Conduct user testing and feedback sessions for iterative improvements. Implement multi-language support for broader accessibility.'
          />
          <Details
            position='Expansion and Integration'
            time='Q1-Q2 2025'
            address='Siriusnet, Ethereum, Binance'
            work='Expand the reach of Siriuswap by integrating with additional blockchain networks and protocols. Forge partnerships with other DeFi projects and ecosystem players to increase liquidity and trading options. Explore opportunities for cross-chain interoperability to enable seamless asset transfers.'
          />
          <Details
            position='DeFi Innovation'
            time='Q3-Q4 2025'
            address='Siriusnet, Blockchain'
            work='Drive innovation in decentralized finance (DeFi) by introducing novel features and products. Explore yield farming opportunities, decentralized lending protocols, and liquidity mining incentives to attract users and increase engagement. Collaborate with developers and communities to explore emerging trends and technologies in the DeFi space.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
