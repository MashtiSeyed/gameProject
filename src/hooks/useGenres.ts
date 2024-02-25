import dataClient from '../data/data-client'

export interface Genres {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => ({error: null, isLoading: false, data: dataClient})

export default useGenres;