import { forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { selectStyles } from './Select.styles';
import { SelectElementProps, SelectOptions } from './types';

export type SelectProps = SelectElementProps &
  VariantProps<typeof selectStyles> & {
    options: SelectOptions[];
    label?: string;
    helperText?: string;
    className?: string;
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      variant,
      size = 'md',
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
          className={selectStyles({
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
