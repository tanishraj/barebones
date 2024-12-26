import { Modal } from '@/components';

export const ModalExample = () => {
  return (
    <div className='card card-bordered p-4 shadow-sm'>
      <div className='card-title'>Modal:</div>

      <div className='card-body flex flex-col flex-wrap gap-2'>
        <div className='card card-bordered p-4 shadow-sm'>
          <div className='card-title'>Basic Modal:</div>
          <div className='card-body flex flex-row flex-wrap gap-2'>
            <Modal
              triggerLabel='Open Modal'
              title='Basic Modal'
              content='This is a basic modal.'
              onClose={() => console.log('Modal closed')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
