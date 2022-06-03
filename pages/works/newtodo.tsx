import Image from 'next/image';
import React from 'react';
import Badge from '../../UI/Badge';
import Section from '../../components/layout/Section';
import Meta from '../../UI/Meta';
import { NextPage } from 'next';
import Breadcrumbs from '../../UI/Breadcrumbs';

const newtodo: NextPage = ({ router }: any) => {
  return (
    <Section className='max-w-lg'>
      <Breadcrumbs paths={router.asPath}>
        New ToDo <Badge size='sm'>2022-</Badge>
      </Breadcrumbs>
      <p className='my-5 indent-4'></p>

      <div className='m-auto mb-5'>
        <h3 className='mb-3 max-w-sm text-2xl font-bold text-primary underline decoration-slate-500 underline-offset-4'>
          Stack
        </h3>
        <ul className='ml-3 space-y-1'>
          <li className='text-sm'>
            <Meta>Website</Meta>
            <span className='font-semibold'> In Development</span>
          </li>
          <li className='text-sm'>
            <Meta>Source Code Frontend</Meta>
            <a
              className='text-blue-500 underline'
              target={'_blank'}
              rel={'noreferrer'}
              href='https://github.com/Dilanjer/mern-todo-frontend'>
              https://github.com/Dilanjer/mern-todo-frontend
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Source Code Backend</Meta>
            <span className='font-semibold'>So far secret</span>
          </li>
          <li className='text-sm'>
            <Meta>Stack Frontend</Meta>
            ReactJS, classNames, Framer Motion, React Hook Form, Redux Tollkit,
            SCSS, Tailwind CSS
          </li>
          <li className='text-sm'>
            <Meta>Stack Backend</Meta>
            Express, MongoDB, JWT, NodeMailer
          </li>
        </ul>

        <div className='text-center'>
          <div className='mt-5 inline-block border text-center shadow'>
            <Image
              className='rounded-md'
              width={'900'}
              height={'600'}
              alt='hero'
              src={'/images/works/todo_app3.jpg'}
            />
          </div>
          <div className='mt-5 inline-block border text-center shadow'>
            <Image
              className='rounded-md'
              width={'900'}
              height={'600'}
              alt='hero'
              src={'/images/works/todo_app.jpg'}
            />
          </div>
          <div className='mt-5 inline-block border text-center shadow'>
            <Image
              className='rounded-md'
              width={'900'}
              height={'600'}
              alt='hero'
              src={'/images/works/todo_app2.png'}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default newtodo;
