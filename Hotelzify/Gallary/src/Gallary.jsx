import "./index.css";
import { useState, useEffect } from "react";

export const ImageGallery = () => {
  let [noOfImages, setNumberOfImages] = useState([]); //useState to save the response we are getting from API
  let [count, setCount] = useState(1); // state to save the number if images to be displayed, this will be passed to the API URL dynamically

  function fetchMore() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    async function fetchingImages() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products?limit=${count}`
        );
        const data = await res.json();
        console.log(data);
        setNumberOfImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchingImages();
  }, [count]);

  //I tried it first with a predefiend array
  // const images = [
  //   "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  //   "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  //   "https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180",
  // ];

  const renderImages = () => {
    switch (noOfImages.length) {
      case 1:
        return (
          <div className="centerButton onlyOneImage">
            <button onClick={() => fetchMore()}>Fetch Next</button>
            <img src={noOfImages[0].image} alt="Image 1" />
          </div>
        );
      case 2:
        return (
          <div className="centerButton">
            <button onClick={() => fetchMore()}>Fetch Next</button>
            <div className="flex TwoImages">
              <img src={noOfImages[0].image} alt="Image 1" />
              <img src={noOfImages[1].image} alt="Image 2" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="centerButton">
            <button onClick={() => fetchMore()}>Fetch Next</button>

            <div className="flex threeImages">
              <div className="largeImage">
                <img src={noOfImages[0].image} alt="Image 1" />
              </div>
              <div className="smallImages">
                <img src={noOfImages[1].image} alt="Image 2" />
                <img src={noOfImages[2].image} alt="Image 3" />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="centerButton">
            <button onClick={() => fetchMore()}>Fetch Next</button>
            <div className="flex fourImagesContainer">
              <div className="firsttTwo">
                <img src={noOfImages[0].image} alt="Image 1" />
                <img src={noOfImages[1].image} alt="Image 2" />
              </div>
              <div className="flex nextTwo">
                <img src={noOfImages[2].image} alt="Image 2" />
                <img src={noOfImages[3].image} alt="Image 3" />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="centerButton">
            <button onClick={() => fetchMore()}>Fetch Next</button>
            <div className="flex FiveImagesContainer">
              <img src={noOfImages[0].image} alt="Image 1" />
              <div className="fourImagesDiv">
                <div className="flex firsttTwo">
                  <img src={noOfImages[1].image} alt="Image 2" />
                  <img src={noOfImages[2].image} alt="Image 3" />
                </div>
                <div className="flex nextTwo">
                  <img src={noOfImages[3].image} alt="Image 4" />
                  <img src={noOfImages[4].image} alt="Image 5" />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>No images or too many images to display.</div>;
    }
  };

  return <div>{renderImages()}</div>;
};
