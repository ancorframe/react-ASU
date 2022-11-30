import { Box } from "components/Box"
import { Footer } from "components/common/Footer"
import { ImgCard } from "components/common/ImgCard"

import img from '../image/Rectangl.png'

export const NewsDetail = () => {
    return (
        <>
            <Box as='main' maxWidth='1248px' m='0 auto'>
                <Box position='relative' maxHeight='480px' mb='92px'>
                    <ImgCard src={img} />
                </Box>
                <Box p='48px'>
                    
                </Box>
        </Box>
            <Footer/>
        </>
    )
}