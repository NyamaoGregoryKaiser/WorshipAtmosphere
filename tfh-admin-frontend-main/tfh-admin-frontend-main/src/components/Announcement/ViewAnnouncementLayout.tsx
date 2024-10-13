import React from 'react';
import { FiEdit, FiImage, FiTrash } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { AnnouncementType } from '../../../types/types';
import DeleteAnnouncementModal from './DeleteAnnouncementModal';
import DefaultImage from '../../assets/images/default.jpg';
import Divider from '../../common/Divider/Divider';

const AnnouncementItem = ({
  title,
  content,
  multipleContent,
  joinMultipleContent,
  isBooleanValue,
  type,
}: {
  title: string;
  content?: string | boolean | number;
  multipleContent?: string[];
  joinMultipleContent?: boolean;
  isBooleanValue?: boolean;
  type?: 'html';
}) => (
  <>
    <div className={'flex items-start flex-wrap gap-3'}>
      <span className='font-bold'>{title}</span>

      {type === 'html' ? (
        <div dangerouslySetInnerHTML={{ __html: content as string }} />
      ) : (
        <>
          {isBooleanValue && <span>{content ? 'Yes' : 'No'}</span>}
          {content && <span>{content}</span>}
          {multipleContent && !joinMultipleContent ? (
            <div className='flex flex-col gap-2'>
              {multipleContent.map((content) => (
                <span key={content}>{content}</span>
              ))}
            </div>
          ) : (
            <span>{multipleContent?.join(' , ')}</span>
          )}
        </>
      )}
    </div>
  </>
);

function ViewAnnouncementLayout({
  announcement,
}: {
  announcement: AnnouncementType | undefined;
}) {
  const navigate = useNavigate();

  // delete modal
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  if (!announcement) return <>Announcement not found</>;

  return (
    <div>
      <article className='flex flex-col gap-5'>
        <img
          src={announcement.image || DefaultImage}
          alt='Poster'
          className='object-cover h-60 w-full rounded-t-lg'
        />
        <AnnouncementItem title='Title:' content={announcement.title} />

        <AnnouncementItem title='Priority:' content={announcement.priority} />
        {announcement.details && (
          <AnnouncementItem title='Details:' content={announcement.details} type='html' />
        )}
      </article>

      <div className='flex items-center justify-center gap-5 mt-10'>
        <Link to={`/announcement/edit/${announcement.id}`} className='w-[200px]'>
          <Button>
            <FiEdit className='mr-5' />
            Edit
          </Button>
        </Link>
        <Button className='max-w-[200px] bg-error' onClick={openDeleteModal}>
          <FiTrash className='mr-5' />
          Delete
        </Button>
      </div>

      <DeleteAnnouncementModal
        closeDeleteModal={closeDeleteModal}
        deleteModalOpen={deleteModalOpen}
        announcement={announcement}
        navigateFunction={() => navigate('/announcement')}
      />
    </div>
  );
}

export default ViewAnnouncementLayout;
