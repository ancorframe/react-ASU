import parse from 'html-react-parser';
export const HtmlParser = ({ html, options }) => {
  return <>{parse(html, options)}</>;
};
