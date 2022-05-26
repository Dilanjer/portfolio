import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Menu from './Menu';

interface LinkItemProps {
  href: string;
  path?: string;
  target?: string;
  children: React.ReactNode | string;
}

export const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = href === path;

  return (
    <Link scroll={false} href={href} target={target} {...props}>
      <a
        tabIndex={0}
        target={target}
        className={
          'group flex items-center p-2 font-semibold uppercase  text-gray-600 outline-2 outline-blue-300 '
        }>
        <div
          className={`mx-2 mt-1.5 text-sm  underline-offset-4 group-hover:underline ${
            active && 'text-teal-700 underline decoration-teal-700'
          }`}>
          {children}
        </div>
      </a>
    </Link>
  );
};

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className='sticky top-0 z-10 h-14 bg-white/20 backdrop-blur-md'>
      <nav className='mx-auto flex h-full w-full max-w-5xl items-center px-3'>
        <Logo />
        <div className='ml-4  hidden items-center md:flex'>
          <LinkItem path={asPath} href='/works'>
            Works
          </LinkItem>
          <LinkItem target={'_blank'} href='https://github.com/Dilanjer'>
            GitHub
          </LinkItem>
        </div>
        <div className='ml-auto md:hidden'>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
