export type DropdownPosition = 'top' | 'bottom' | 'left' | 'right';
export type DropdownAlignment = 'start' | 'end';
export type DropdownSize = 'xs' | 'sm' | 'md' | 'lg';
export type DropdownVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'
  | 'outline';

export type DropdownOpenBehavior =
  | 'hover'
  | 'toggle'
  | 'force'
  | 'clickOutsideClose';

type DropdownMenuItem = {
  label: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
  position?: DropdownPosition;
  alignment?: DropdownAlignment;
  size?: DropdownSize;
  variant?: DropdownVariant;
  className?: string;
  disabled?: boolean;
}
