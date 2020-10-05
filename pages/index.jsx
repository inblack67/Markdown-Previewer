import { useState } from 'react';
import GrayMatter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import CodeBlocks from '../components/CodeBlocks';
import { useRouter } from 'next/router';

/*
```js
console.log('hello');
```
*/

const index = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    code: '',
  });

  const [mdContent, setMdContent] = useState('');

  const [mdHTML, setMdHTML] = useState('');

  const onChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
    const input = e.target.value;
    const mdData = GrayMatter(input);
    const html = marked(mdData.content);
    setMdHTML(html);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const mdData = GrayMatter(code);
    setMdContent(mdData.content);
    localStorage.setItem('mdContent', mdData.content);
    // router.push('/posts');
  };

  const { code } = formData;

  return (
    <div className='container'>
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

      <div>
        {mdContent.split('').length > 0 ? (
          <ReactMarkdown source={mdContent} renderers={{ code: CodeBlocks }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: mdHTML }} />
        )}
      </div>
    </div>
  );
};

export default index;
