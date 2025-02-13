import { cva } from 'class-variance-authority';

export const selectVariants = cva('select', {
  variants: {
    variant: {
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
      info: 'select-info',
      success: 'select-success',
      warning: 'select-warning',
      error: 'select-error',
      ghost: 'select-ghost',
    },
    size: {
      xs: 'select-xs',
      sm: 'select-sm',
      md: 'select-md',
      lg: 'select-lg',
    },
    bordered: {
      true: 'select-bordered',
    },
    disabled: {
      true: 'select-disabled',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    bordered: true,
  },
});
