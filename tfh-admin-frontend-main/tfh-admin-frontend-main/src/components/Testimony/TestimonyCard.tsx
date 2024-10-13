import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { FiMoreVertical } from 'react-icons/fi';
import Card from '../../common/Card/Card';
import { TestimonyType } from '../../../types/types';
import CardMenu from './CardMenu';

function TestimonyCard({
  testimony,
  changeTestimonyStatus,
}: {
  testimony: TestimonyType;
  changeTestimonyStatus: (
    testimony: TestimonyType,
    newStatus: 'pending' | 'approved' | 'declined' | 'archived'
  ) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const getStatusColor = (status: string) => {
    let color = '';

    switch (status) {
      case 'pending':
        color = '#EEB614';
        break;
      case 'approved':
        color = '#2BB62A';
        break;
      case 'declined':
        color = '#F13637';
        break;
      case 'archived':
        color = '#404040';
        break;

      default:
        break;
    }
    return color;
  };
  return (
    <Card className='min-w-full shadow'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-2'>
            <span className='font-bold'>Date:</span>
            <span>{new Date(testimony.createdAt).toDateString()}</span>
          </div>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className='relative'>
              <button
                onClick={() => setOpen(true)}
                className='flex items-center relative hover:bg-primaryAccent1 pl-1 pr-1 pt-1 pb-1 rounded-sm'
              >
                <FiMoreVertical />
              </button>
              {open && (
                <CardMenu
                  testimony={testimony}
                  closeMenu={closeMenu}
                  changeTestimonyStatus={changeTestimonyStatus}
                />
              )}
            </div>
          </ClickAwayListener>
        </div>
        <div className='flex flex-row gap-2'>
          <span className='font-bold'>Name:</span>
          <span className='capitalize'>{testimony.names}</span>
        </div>
        <div className='flex flex-row gap-2 flex-wrap'>
          <span className='font-bold'>Summary:</span>
          <span className='capitalize'>{testimony.titles}</span>
        </div>
        <div className='flex flex-row gap-2 flex-wrap'>
          <span className='font-bold'>Testimony:</span>
          <div dangerouslySetInnerHTML={{ __html: testimony.main_gist as string }} />
        </div>
        <div className='flex flex-row gap-2'>
          <span className='font-bold'>Status:</span>
          <span
            className='capitalize'
            style={{
              color: getStatusColor(testimony.status),
            }}
          >
            {testimony.status}
          </span>
        </div>
        <div className='flex flex-row gap-2'>
          <span className='font-bold'>Interaction Channel:</span>
          <span className='capitalize'>{testimony.source}</span>
        </div>
      </div>
    </Card>
  );
}

export default TestimonyCard;
