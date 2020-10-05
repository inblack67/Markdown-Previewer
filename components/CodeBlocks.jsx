import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import PropTypes from 'prop-types';

const CodeBlocks = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={syntaxTheme}>
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlocks.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlocks;
