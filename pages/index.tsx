import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Main from '../components/layout/Main';
import Section from '../components/layout/Section';
import { ChevronRightIcon, MenuIcon } from '@heroicons/react/outline';
import Button from '../UI/Button';

const Home: NextPage = () => {
  return (
    <>
      <Section className='mb-10'>
        <div className='mb-14 flex flex-col items-center space-y-5 pt-12'>
          <div className='space-y-3 text-center'>
            <Image
              className='rounded-md'
              width={'480'}
              height={'340'}
              alt='hero'
              src={'/images/main.gif'}
            />
            <h1 className=' text-7xl font-bold text-primary'>
              Hey There, I&apos;m Arthur
            </h1>

            <h2 className='ml-1 mt-3 text-primary'>
              <span className='font-semibold'>Digital Craftsman:</span>
              <span className='text-sm'>
                ( Frontend Developer | UX/UI Designer )
              </span>
            </h2>
          </div>
          <div className=''>
            <p className='max-w-sm bg-white/60 p-2  text-base text-primary shadow '>
              I am a junior Frontend developer from
              <span className='font-medium'> Armenia.</span> I love what I do
              and it inspires me. for new and interesting projects
            </p>
          </div>
          <div className='!my-5'>
            <span className='font-bold text-primary'>Contact me: </span>
            <a
              className='text-orange-600'
              href='mailto:artur_hovhannisyan@protonmail.com'>
              artur_hovhannisyan@protonmail.com
            </a>
          </div>
          <Link href={'/works'}>
            <a>
              <Button>
                <span>My Portfolio</span>
                <ChevronRightIcon className='mt-0.5 ml-1 w-4' />
              </Button>
            </a>
          </Link>
        </div>
        <div className='m-auto mb-5'>
          <h3 className='mb-3 max-w-sm text-2xl font-bold text-primary underline decoration-slate-500 underline-offset-4'>
            Bio
          </h3>
          <ul className='space-y-1'>
            <li>
              <span className='mr-2 font-bold text-primary'>1997 </span> Born in
              Armenia. Yerevan
            </li>
            <li>
              <span className='mr-2 font-bold text-primary'>2017 </span>
              Started learning to be a web programmer
            </li>
            <li>
              <span className='mr-2 font-bold text-primary'>2019 </span> Work in
              freelance
            </li>
          </ul>
        </div>

        <div className='m-auto mb-5'>
          <h3 className='mb-3 max-w-sm text-2xl font-bold text-primary underline decoration-slate-500 underline-offset-4'>
            I know
          </h3>
          <ul className='space-y-1'>
            <li>
              <span className='mr-2 font-bold text-primary'>Frontend: </span>
              <ul className='ml-5'>
                <li>- JavaScript (ES6+)</li>
                <li>- ReactJS, NextJS (in learning)</li>
                <li>- Redux, Redux Toolkit, Redux Thunk (in learning)</li>
                <li>- React Hook Form</li>
                <li>- ESLint, Prettier</li>
                <li>- SCSS / styled-components / CSS Modules</li>
                <li>
                  - Material UI, Semantic UI, Ant Design, Chakra UI, Tailwind
                  CSS
                </li>
                <li>- Webpack</li>
              </ul>
            </li>

            <li>
              <span className='mr-2 font-bold text-primary'>Backend: </span>
              <ul className='ml-5'>
                <li>- Node.JS / Express</li>
                <li>- MongoDB / Mongoose</li>
                <li>- JWT / PassportJS (in learning)</li>
              </ul>
            </li>

            <li>
              <span className='mr-2 font-bold text-primary'>Other skills:</span>
              <ul className='ml-5'>
                <li>- Git / GitHub</li>
                <li>- BEM (CSS)</li>
              </ul>
            </li>

            <li>
              <span className='mr-2 font-bold text-primary'>I Love:</span>
              <ul className='ml-5'>
                <li>Music, Repair Electronics, Any Animals</li>
              </ul>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Home;
