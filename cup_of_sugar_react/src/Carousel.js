import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { Button } from 'reactstrap';
import './Carousel.css'

const Carousel = () => {
  return (
      <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      interval={1000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"t
              src="https://media.brstatic.com/2019/01/23163818/I-only-spend-150-a-month-on-groceries-heres-how.jpg"
              style={{  height: 600}}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive ">A cup of Sugar</h3>
            <p className="text">Most people waste more food than they think...</p>
            <p className="text">—here is how to fix it!</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://assets.epicurious.com/photos/58e2673b81339e10fcb0ceb2/16:9/w_1280,c_limit/working-parent-Grocery-List-03292017.jpg"
              style={{ height: 600}}
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Got extras?</h3>
            <p className="text">A third of the food we produce globally is thrown away

</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mantis.com/wp-content/uploads/2018/08/Share-Surplus-Vegetables-blog.jpg"
              style={{ height: 600}}
              alt="Third slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Share it</h3>
            <p className="text">Is easy!</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src="http://www.topfase.com.br/wp-content/uploads/2018/08/20161208_foodwaste_news_featured-1030x687.jpg"
              style={{ height: 600}}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Reduce</h3>
            <p className="text">Imagine a future where our most precious resources are shared, not thrown away.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    
  );
}

export default Carousel;
