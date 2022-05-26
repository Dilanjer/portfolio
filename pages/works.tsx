import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Section from '../components/layout/Section';
import WorkItem from '../components/WorkItem';

const works = () => {
  return (
    <Section title='Works'>
      <div className='flex flex-col flex-wrap items-center gap-0 space-y-4 md:flex-row md:items-start md:gap-3 md:space-y-0'>
        <WorkItem
          href={'/works/portfolio'}
          imgSrc={'/images/main.gif'}
          title={'Portfolio'}
          description={`
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Veritatis libero tenetur laudantium delectus distinctio rerum
						eum illo harum molestias eos?
				`}
        />
      </div>
    </Section>
  );
};

export default works;
