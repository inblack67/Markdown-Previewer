import React from 'react';
import PropTypes from 'prop-types';
import CodeBlocks from './CodeBlocks';
import ReactMarkdown from 'react-markdown';

const PostItem = ({ post }) => {
  return (
    <div>
      <div>
        {post && (
          <ReactMarkdown source={post} renderers={{ code: CodeBlocks }} />
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
