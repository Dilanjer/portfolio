import Image from 'next/image';
import React from 'react';
import Badge from '../../UI/Badge';
import Section from '../../components/layout/Section';
import Meta from '../../UI/Meta';
import { NextPage } from 'next';
import Breadcrumbs from '../../UI/Breadcrumbs';

const waxom: NextPage = ({ router }: any) => {
  return (
    <Section className='max-w-lg'>
      <Breadcrumbs paths={router.asPath}>
        Waxom <Badge size='sm'>2020-</Badge>
      </Breadcrumbs>
      <p className='my-5 indent-4'>This project is my favorite</p>

      <div className='m-auto mb-5'>
        <h3 className='mb-3 max-w-sm text-2xl font-bold text-primary underline decoration-slate-500 underline-offset-4'>
          Stack
        </h3>
        <ul className='ml-3 space-y-1'>
          <li className='text-sm'>
            <Meta>Website</Meta>
            <a
              className='text-blue-500 underline'
              target={'_blank'}
              rel={'noreferrer'}
              href='https://dilanjer.github.io/waxom/'>
              https://dilanjer.github.io/waxom/
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Soure Code</Meta>
            <a
              className='text-blue-500 underline'
              target={'_blank'}
              rel={'noreferrer'}
              href='https://github.com/Dilanjer/waxom'>
              https://github.com/Dilanjer/waxom
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Stack</Meta>
            HTML5, LESS, JavaScript (ES6 +)
          </li>
        </ul>

        <div className='mt-5 border text-center shadow'>
          <Image
            className='rounded-md'
            width={'800'}
            height={'520'}
            alt='woxom'
            src={'/images/works/waxom.png'}
          />
        </div>
      </div>
    </Section>
  );
};

export default waxom;
