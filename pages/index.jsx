import { useState } from 'react';
import GrayMatter from 'gray-matter';
import marked from 'marked';
import { RenderMarkdown } from 'use-syntaxer';

/*
```js
console.log('hello');
```
*/

const index = () => {
  const [formData, setFormData] = useState({
    code: '',
  });

  const [previewRequested, setPreviewRequested] = useState(false);

  const [mdHTML, setMdHTML] = useState('');

  const onChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
    const input = e.target.value;
    const mdData = GrayMatter(input);
    const html = marked(mdData.content);
    setMdHTML(html);
    setPreviewRequested(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPreviewRequested(true);
  };

  const { code } = formData;

  return (
    <div className='container'>
      <div>
        {previewRequested ? (
          <RenderMarkdown code={code} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: mdHTML }} />
        )}
      </div>
      <form onSubmit={onSubmit}>
        <div className='input-field'>
          <textarea
            required
            value={code}
            onChange={onChange}
            className='materialize-textarea'
            name='code'
            id='code'
            cols='30'
            rows='10'
          ></textarea>
          <label htmlFor='code'>Code</label>
          <span className='helper-text red-text'>Enter Your Markdown Code</span>
        </div>
        <div className='input-field'>
          <button type='submit' className='btn red'>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
