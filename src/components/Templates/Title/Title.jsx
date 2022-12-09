import { H1, H2, H3, H4, H5 } from './Title.styled';


export const Titles = ({ title ,children, m}) => {
  
    return (
      <>
        {title === 'h1' && <H1>{children}</H1>}
        {title === 'h2' && <H2 m={m}>{children}</H2>}
        {title === 'h3' && <H3>{children}</H3>}
        {title === 'h4' && <H4>{children}</H4>}
        {title === 'h5' && <H5>{children}</H5>}
      </>
    );
}