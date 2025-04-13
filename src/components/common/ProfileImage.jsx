import { useRef, useEffect } from 'react';
import {profileImg} from './../../assets/index';

function ProfileImage({showImage, setShowImage}) {
  const imgRef = useRef(null);
  // hide profile image onclick
  const hideProfileImage = (e) => {
    if (e.target !== imgRef.current) {
        setShowImage(false);
    }
  }
  // disable scroll on showing image
  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Clean up on unmount
    return () => (document.body.style.overflow = 'auto');
  }, [showImage]);
  return (
    <>
      {
        showImage
        &&
        <div onClick={hideProfileImage}
          className='w-screen h-screen z-50 bg-white/10 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center'>
          <div className='w-full max-w-[360px] p-4'>
            <img ref={imgRef} src={profileImg} alt="profile-img"
              className='w-full h-auto rounded-full border-2 border-lightColor shadow-lg' />
          </div>
        </div>
      }
    </>
  )
}

export default ProfileImage