import Thumb from '../assets/thumbs-up.238x256.png'
import Meh from '../assets/neutral-face.256x256.png'
import Bulleye from '../assets/bullseye.svg'
import { Image, ImageProps } from '@chakra-ui/react'
interface Props {
    rating: number;
}

const Emoji = ({rating}:Props) => {
    if(rating < 3) return null;
    const rates:{[key: number]:ImageProps} = {
        4:{src: Thumb, alt: 'recommended'},
        3:{src: Meh, alt: 'not good'},
        5:{src: Bulleye, alt: 'exelent'},
    }
    return (
        <Image {...rates[rating]}/>
    )
}

export default Emoji
