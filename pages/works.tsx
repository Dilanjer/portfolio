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
        <WorkItem
          href={'/works/waxom'}
          imgSrc={'/images/works/waxom.png'}
          title={'Waxom'}
          description={`
					This project is my favorite
				`}
        />
        <WorkItem
          href={'/works/tictactoe'}
          imgSrc={'/images/works/tictactoe.png'}
          title={'Tic Tac Toe'}
          description={`
					It's my first web game.
				`}
        />
        <WorkItem
          href={'/works/todo'}
          imgSrc={'/images/works/todo.png'}
          title={'ToDo'}
          description={`
					In this project, I wanted to dynamically create HTML markup and change
					it with JavaScript.
				`}
        />
      </div>
    </Section>
  );
};

export default works;
