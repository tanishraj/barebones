import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'accent',
        'info',
        'success',
        'warning',
        'error',
        'ghost',
      ],
      description: 'Visual variant of the select',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the select component',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show a border around the select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select interaction',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the select',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the select',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the select element',
    },
  },
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    variant: 'primary',
    size: 'md',
    bordered: true,
    disabled: false,
    label: 'Choose an option',
    helperText: 'This is a helper text',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: args => <Select {...args} />,
};
