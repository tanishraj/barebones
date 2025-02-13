import React, { forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { selectVariants } from './Select.styles';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof selectVariants> & {
    options: { value: string; label: string }[];
    label?: string;
    helperText?: string;
    className?: string;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      variant,
      size,
      bordered,
      disabled,
      label,
      helperText,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className='form-control w-full'>
        {label && (
          <label className='label'>
            <span className='label-text'>{label}</span>
          </label>
        )}
        <select
          ref={ref}
          className={selectVariants({
            variant,
            size,
            bordered,
            disabled,
            className,
          })}
          disabled={disabled}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {helperText && (
          <label className='label'>
            <span className='label-text-alt'>{helperText}</span>
          </label>
        )}
      </div>
    );
  },
);
