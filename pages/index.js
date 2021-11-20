import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [text, setText] = useState({
    text: 'hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog hotdog',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    fontSize: 12,
    lineHeight: 12,
  });
  const [image, setImage] = useState(null);

  const onChange = event => {
    if (event?.target?.files?.[0]) {
      setImage(window.URL.createObjectURL(event?.target?.files?.[0]));
    } else {
      setText(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="sidebar">
          <div>
            <label className="text-label">
              Photo
            </label>
            <label for="file-upload" className="custom-file-upload">
              Select Photo
              <input 
                type="file" 
                accept="image/*"
                required 
                capture 
                onChange={onChange}
                className="file-input"
                id="file-upload"
              />
            </label>
          </div>
          <div>
            <label className="text-label">
              Text
            </label>
            <textarea 
              name="text"
              rows="20" 
              value={text.text} 
              onChange={onChange}
              className="text-input" 
            />
          </div>
          <div>
            <label className="text-label">
              Background Size
            </label>
            <select 
              name="backgroundSize"
              onChange={onChange}
              className="select-input"
              value={text.backgroundSize} 
            >
            {['auto', 'length', 'cover', 'contain', 'initial', 'inherit'].map(item => (
              <option value={item}>{item}</option>
            ))}
            </select>
          </div>
          <div>
            <label className="text-label">
              Font Size
            </label>
            <input
              name="fontSize"
              value={text.fontSize} 
              onChange={onChange}
              className="text-input" 
            />
          </div>
          <div>
            <label className="text-label">
              Line Height
            </label>
            <input
              name="lineHeight"
              value={text.lineHeight} 
              onChange={onChange}
              className="text-input" 
            />
          </div>
          <div>
            <label className="text-label">
              Background Position
            </label>
            <select 
              name="backgroundPosition"
              onChange={onChange}
              className="select-input"
              value={text.backgroundPosition} 
            >
            {[
              'top',
              'left top',
              'left center',
              'left bottom',
              'right top',
              'right center',
              'right bottom',
              'center top',
              'center center',
              'center bottom',
            ].map(item => (
              <option value={item}>{item}</option>
            ))}
            </select>
          </div>
          <p className="credits">Created by Carl</p>
        </div>
        <div className="section">
          <div className="text-wrapper">
            {image && <p className="text default">{text.text.repeat(100)}</p>}
          </div>
        </div>
      </div>
      <style jsx>{`
        .credits {
          margin-top: 15px;
          font-size: 12px;
        }
        .text {
          text-align: justify;
          font-size: ${text.fontSize}px;
          line-height: ${text.lineHeight}px;
          background: url(${image});
          background-attachment: fixed;
          background-position: ${text.backgroundPosition};
          background-repeat: no-repeat;
          background-size: ${text.backgroundSize};
          color: transparent;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </div>
  )
}
