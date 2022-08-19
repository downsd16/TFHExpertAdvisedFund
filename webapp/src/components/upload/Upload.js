import './upload.css'
import React, { useRef, useState } from "react";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const Upload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  return (
    <div className="uploadContainer">
      <section>
        <label>{label}</label>
        <input
            className='uploadButton'
            type="file"
            ref={fileInputField}
            title=""
            value=""
            {...otherProps}
        />
      </section>
    </div>      
  );
}

export default Upload;