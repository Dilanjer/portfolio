import Image from 'next/image';
import React from 'react';
import Badge from '../../UI/Badge';
import Section from '../../components/layout/Section';
import Meta from '../../UI/Meta';
import { NextPage } from 'next';
import Breadcrumbs from '../../UI/Breadcrumbs';

const portfolio: NextPage = ({ router }: any) => {
  return (
    <Section className='max-w-lg'>
      <Breadcrumbs paths={router.asPath}>
        PortFolio <Badge size='sm'>2022-</Badge>
      </Breadcrumbs>
      <p className='my-5 indent-4'>My portFolio</p>

      <div className='m-auto mb-5'>
        <h3 className='mb-3 max-w-sm text-2xl font-bold text-primary underline decoration-slate-500 underline-offset-4'>
          Stack
        </h3>
        <ul className='ml-3 space-y-1'>
          <li className='text-sm'>
            <Meta>Website</Meta>
            <a className='text-blue-500 underline' rel={'noreferrer'} href='#'>
              You already here
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Source Code</Meta>
            <a
              className='text-blue-500 underline'
              target={'_blank'}
              rel={'noreferrer'}
              href='https://github.com/Dilanjer/portfolio'>
              https://github.com/Dilanjer/portfolio
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Stack</Meta>
            NextJS, ReactJS, TypeScript
          </li>
        </ul>

        <div className='mt-5 border text-center shadow'>
          <Image
            className='rounded-md'
            width={'480'}
            height={'340'}
            alt='hero'
            src={'/images/main.gif'}
          />
        </div>
      </div>
    </Section>
  );
};

export default portfolio;
