import React from "react";

class FormsPage extends React.Component {
  render() {
    return (
      <form className="was-validated" noValidate>
          Add A Product
        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customControlValidation1"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation1"
          >
            Pick up in my current address
          </label>
        </div>

        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation2"
            name="radio-stacked"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation2"
          >
            Perisable
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation3"
            name="radio-stacked"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation3"
          >
            Pantry Products
          </label>
        </div>
         Add Product Image
        <div className="custom-file">
    
          <input
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
            required
          />
          
          <label
            className="custom-file-label"
            htmlFor="validatedCustomFile"
          >
            Choose file...
          </label>
        </div>
        <div>
      <img src={"https://production-500eco.s3.amazonaws.com/uploads/photo/image/3442/large_88818333_dbe3b958a_489728a-768x432.jpeg"}/>
      </div>
      </form>
    
    );
  }
}

export default FormsPage;