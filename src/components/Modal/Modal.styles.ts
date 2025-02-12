import { cva } from 'class-variance-authority';

export const modalStyles = cva('', {
  variants: {
    size: {
      sm: 'w-4/12 max-w-xl',
      md: 'w-6/12 max-w-2xl',
      lg: 'w-8/12 max-w-4xl',
      full: 'h-screen max-h-full w-screen max-w-full rounded-none',
    },
    position: {
      top: 'modal-top',
      bottom: 'modal-bottom',
      center: 'modal-middle',
    },
    isOpen: {
      true: 'modal-open',
      false: '',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg', 'full'],
      position: ['bottom', 'top'],
      class: 'justify-items-stretch justify-self-center',
    },
  ],
  defaultVariants: {},
});
