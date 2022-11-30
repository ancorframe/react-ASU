import { Description } from "./PageDescription.styled"


export const PageDescription = ({children}) => {
    return (
      <>
        <Description>{children}</Description>
      </>
    );
}