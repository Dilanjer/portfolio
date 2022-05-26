import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

const Section = ({ children, title, delay = 0.2, className }: SectionProps) => {
  return (
    <motion.article
      className={`mx-auto my-3 w-full max-w-3xl px-3 ${className}`}
      initial={{
        y: 10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 10,
        opacity: 0,
      }}
      transition={{ duration: delay }}>
      <div>
        {title && (
          <h3 className='mb-3 max-w-sm text-xl font-bold text-primary'>
            {title}
          </h3>
        )}
      </div>
      {children}
    </motion.article>
  );
};

export default Section;
