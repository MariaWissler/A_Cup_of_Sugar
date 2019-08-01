import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './Carousel.css'

const Carousel = () => {
  return (
      <MDBContainer className="carousel">
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls
      showIndicators
      className="z-depth-1"
      interval={2000}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"t
              src="https://images.unsplash.com/photo-1469578418624-bef0479fe7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              style={{  height: 500}}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption >
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
              style={{ height: 500}}
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Got extras?</h3>
            <p className="text">A third of the food we produce globally is thrown away</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              style={{ height: 500}}
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
              style={{  height: 500}}
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
