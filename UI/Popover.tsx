import React from 'react';
import { motion } from 'framer-motion';

interface PopoverPros {
  anchorEl?: any;
  children?: React.ReactNode;
  onClose: any;
  open?: boolean;
  origin?: string;
  className?: string;
  props?: any;
}

function getAnchorElPositions(anchorEl: any) {
  if (anchorEl) return anchorEl.getBoundingClientRect();
}

const Popover = ({
  anchorEl,
  children,
  onClose,
  open,
  className,
  props,
}: PopoverPros) => {
  const anchorElPosition = getAnchorElPositions(anchorEl);
  const popoverRef = React.useRef<any>();

  const escClose = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !anchorEl.contains(event.target)
    ) {
      onClose();
    }
  };

  const updatePopoverVerticalPosttion = () => {
    const popoverHeight = popoverRef.current.offsetHeight;
    const shouldMoveTop =
      popoverHeight > window.innerHeight - anchorElPosition.top;

    popoverRef.current.style.top = shouldMoveTop
      ? `${anchorElPosition.top - popoverHeight - 10}px`
      : `${anchorElPosition.height + anchorElPosition.top + 10}px`;
  };

  const updatePopoverHorizontalPosttion = () => {
    const popoverWidth = popoverRef.current.offsetWidth;
    const shouldMoveLeft =
      popoverWidth > window.innerWidth - anchorElPosition.left;

    popoverRef.current.style.left = shouldMoveLeft
      ? `${anchorElPosition.left - popoverWidth + anchorElPosition.width}px`
      : `${anchorElPosition.left}px`;
  };

  const updatePopoverPosttion = () => {
    updatePopoverVerticalPosttion();
    updatePopoverHorizontalPosttion();
  };

  React.useEffect(() => {
    if (popoverRef.current) updatePopoverPosttion();

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escClose);
    window.addEventListener('resize', onClose);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escClose);
      document.removeEventListener('resize', onClose);
    };
  }, []);

  if (!open) return null;
  return (
    <motion.div
      className={className}
      style={{
        position: 'absolute',
        zIndex: 20,
      }}
      initial={{
        scale: 0.9,
        opacity: 0.2,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.7,
        opacity: 0,
      }}
      transition={{
        duration: 0.15,
        type: 'tween',
      }}
      ref={popoverRef}
      {...props}>
      <div className={'z-50 w-full'}>{children}</div>
    </motion.div>
  );
};

export default Popover;
