import Image from 'next/image';
import React from 'react';
import Badge from '../../UI/Badge';
import Section from '../../components/layout/Section';
import Meta from '../../UI/Meta';
import { NextPage } from 'next';
import Breadcrumbs from '../../UI/Breadcrumbs';

const tictactoe: NextPage = ({ router }: any) => {
  return (
    <Section className='max-w-lg'>
      <Breadcrumbs paths={router.asPath}>
        Tic Tac Toe <Badge size='sm'>2020-</Badge>
      </Breadcrumbs>
      <p className='my-5 indent-4'>
        Еhis is my first game that was made using web techю
      </p>

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
              href='https://dilanjer.github.io/tic-tac-toe/'>
              https://dilanjer.github.io/tic-tac-toe/
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Source Code</Meta>
            <a
              className='text-blue-500 underline'
              target={'_blank'}
              rel={'noreferrer'}
              href='https://github.com/Dilanjer/tic-tac-toe'>
              https://github.com/Dilanjer/tic-tac-toe
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Stack</Meta>
            HTML5, CSS3, JavaScript (ES6 +)
          </li>
        </ul>

        <div className='mt-5 inline-block border text-center shadow'>
          <Image
            className='rounded-md'
            width={'700'}
            height={'520'}
            alt='tictactoe'
            src={'/images/works/tictactoe.png'}
          />
        </div>
      </div>
    </Section>
  );
};

export default tictactoe;
