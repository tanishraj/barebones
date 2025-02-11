import { ButtonThemeController } from './ButtonThemeController';

import { ThemeController } from '@/components';

export const ThemeControllerExample = () => {
  return (
    <div className='card card-bordered p-4 shadow-sm'>
      <div className='card-body flex gap-2'>
        <h1 className='mb-6 text-3xl font-bold'>useTheme Hook</h1>
        <div className='card card-bordered p-4 shadow-sm'>
          <div className='card-body flex gap-2'>
            <ThemeController variant='outline' vertical className='ml-4' />
          </div>
        </div>
        <div className='card card-bordered p-4 shadow-sm'>
          <div className='card-body flex gap-2'>
            <ButtonThemeController />
          </div>
        </div>
      </div>
    </div>
  );
};
