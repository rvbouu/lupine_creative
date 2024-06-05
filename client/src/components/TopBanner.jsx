import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function TopBanner() {


  return (
    <Splide aria-label="Tester text">
      <SplideSlide>
        <p>Test #1</p>
      </SplideSlide>
      <SplideSlide>
        <p>Test #2</p>
      </SplideSlide>
    </Splide>
  )
}