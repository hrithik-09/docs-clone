import React, { useCallback,useState} from 'react';
import Quill from 'quill';
import  Modal  from './Modal';
import 'quill/dist/quill.snow.css';
const TOOLBAR_OPTIONS = [
  
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ direction: 'rtl' }],
  ['link', 'strike'],
];

export default function TextEditor() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleShareClick = () => {
    setModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };
  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null)
    {
      return;
    } 

    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    new Quill(editor, {
      theme: 'snow',
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
  }, []);

  return (
    <div>
        <ul class="nav">
    <li>
        <a href="/">File</a>
    </li>
    <li>
        <a href="/">Edit</a>
    </li>
    <li>
        <a href="/">View</a>
    </li>
    <li>
        <a href="/">Insert</a>
    </li>
    <li>
        <a href="/">Format</a>
    </li>
    <li>
        <a href="/">Tools</a>
    </li>
    <li>
        <a href="/">Extension</a>
    </li>
    <li>
        <a href="/">Help</a>
    </li>
    <li className='share add-docs' style={{ float: 'right',marginTop:'-2px',marginRight: '40px',border:'2px solid rgba(121, 114, 114, 0.696)',borderRadius:'40px', padding:'4px 10px'}}> {/* Add a new list item for the share button */}
          <button onClick={handleShareClick}>Share</button> 
    </li>
        </ul>
        <Modal open={isModalOpen} setOpen={setModalOpen} />
      <div className="container" ref={wrapperRef}></div>
    </div>
  );
}
