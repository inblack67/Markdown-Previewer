import { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import CodeBlocks from '../components/CodeBlocks';
import ReactMarkdown from 'react-markdown';

const allPosts = [];

const posts = () => {
  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    const md = localStorage.getItem('mdContent');
    setMdContent(md);
    allPosts.push(md);
  }, []);

  return (
    <div className='container'>
      {mdContent && (
        <ReactMarkdown source={mdContent} renderers={{ code: CodeBlocks }} />
      )}
      {/* {posts.length > 0 ? (
        posts.map((post, i) => <PostItem key={i} post={post} />)
      ) : (
        <p className='center red-text flow-text'>No Posts Yet.</p>
      )} */}
    </div>
  );
};

export default posts;
