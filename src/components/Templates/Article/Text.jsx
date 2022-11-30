import { MarginP, P } from './Text.styled';

export const Text = ({ children, margin }) => {
  return <>{margin ? <MarginP>{children}</MarginP> : <P>{children}</P>}</>;
};
