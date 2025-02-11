import { cva } from 'class-variance-authority';

export const buttonStyles = cva('btn gap-2', {
  variants: {
    variant: {
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      primary: 'btn-primary',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
