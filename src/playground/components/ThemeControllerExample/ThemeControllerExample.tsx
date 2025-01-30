import { useTheme } from '@/hooks/useTheme';

export const ThemeControllerExample = () => {
  const { handleThemeChange, themes } = useTheme();

  return (
    <div className='min-h-screen bg-base-100 text-base-content'>
      <header className='navbar bg-base-200'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>My App</a>
        </div>
        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <span>Theme</span>
              <svg
                width='12px'
                height='12px'
                className='h-4 w-4 fill-current opacity-60'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 2048 2048'
              >
                <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl'
            >
              {themes.map(theme => (
                <li key={theme}>
                  <button
                    className='btn btn-ghost btn-sm w-full justify-start'
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <main className='p-8'>
        <h1 className='text-3xl font-bold'>Welcome to My App</h1>
        <p className='mt-4'>
          Switch themes using the theme controller in the top-right corner.
        </p>
      </main>
    </div>
  );
};
