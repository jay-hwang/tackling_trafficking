import React from 'react';

const UploadButton = props => {
  const upload = e => {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error) {
          // something went wrong
        } else {
          props.addImage(images[0].url);
        }
      }
    );
  };

  return (
    <div>
      <div className='upload-img-btn-box desktop'>
        <button className='upload-img-btn display-none' onClick={ upload }>
          UPLOAD IMAGE
        </button>
      </div>

      <div className='upload-img-btn-box mobile'>
        <button className='upload-img-btn' onClick={ upload }>
          UPLOAD IMAGE
        </button>
      </div>
    </div>
  );
};

export default UploadButton;
