import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
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
    },
    bordered: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    className: {
      control: 'text',
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
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: args => <Select {...args} />,
};
