import { getGifs } from '../helpers/getGifs';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({category}) => {
  getGifs(category);

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}
