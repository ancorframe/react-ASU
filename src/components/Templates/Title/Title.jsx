import { H1, H2, H3, H4, H5 } from './Title.styled';


export const Title = (props) => {
  
    return (
      <>
        {props.variant === 'h1' && <H1 {...props} />}
        {props.variant === 'h2' && <H2 {...props} />}
        {props.variant === 'h3' && <H3 {...props} />}
        {props.variant === 'h4' && <H4 {...props} />}
        {props.variant === 'h5' && <H5 {...props} />}
      </>
    );
}