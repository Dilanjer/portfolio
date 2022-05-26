import Image from 'next/image';
import React from 'react';
import Badge from '../../components/Badge';
import Section from '../../components/layout/Section';
import { Meta, Title } from '../../components/Work';

const portfolio = () => {
  return (
    <Section className='max-w-xl'>
      <Title>
        PortFolio <Badge size='sm'>2022-</Badge>
      </Title>
      <p className='my-5 indent-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, eos
        qui! Enim suscipit, a cumque accusamus unde alias exercitationem
        doloremque porro ducimus incidunt, ea vitae ipsa quas voluptatem
        deleniti culpa.
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
              href='https://portfolio-dilanjer.vercel.app/'>
              https://portfolio-dilanjer.vercel.app/
            </a>
          </li>
          <li className='text-sm'>
            <Meta>Stack</Meta>
            NextJS, ReactJS, TypeScript
          </li>
        </ul>

        <div className='mt-5 text-center'>
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
