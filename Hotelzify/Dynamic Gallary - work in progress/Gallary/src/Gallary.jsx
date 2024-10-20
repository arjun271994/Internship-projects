import React from "react";
import "./App.css";

export const ImageGallery = () => {
  const images = [
    "https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.j9AibUbe0dDBZK8QlY1JowHaEU&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.JDa_1X-NqdM1K-bZxp99DQHaEo&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.FEqv7YYMNjXtrVYqo7HHzAHaE7&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180",
  ];

  return (
    <div className="gallery-container">
      {images.map((ele) => {
        return <img src={ele} />;
      })}
    </div>
  );
};
