import React from "react";

const ImageCoursel: React.FC = () => {
  return (
    <div className="kick-img-scroller">
      <div>
        <img src={'/assets/images/img4.png'} className="kick-img" alt="Image 1" /> {/* Using Next.js Image component */}
      </div>
      <div className="mt-3 d-none d-sm-block">
        <img src='/assets/images/kicked2.png' className="kick-img" alt="Image 2" /> {/* Using Next.js Image component */}
      </div>
    </div>
  );
};

export default ImageCoursel;
