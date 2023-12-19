import React, { useState } from 'react';
import './ViewProduct.css';

interface Content {
  id: number;
  title: string;
  description: string;
  price: string;
  reviews: string;
  color: string;
  buttonText1: string;
  buttonText2: string;
}

const ViewProduct: React.FC = () => {
  const imageUrls: string[] = [
    'https://th.bing.com/th/id/R.59c1b7ec3fcf8c80f3aa756881fd952b?rik=yWFlGSDZKaqsDw&riu=http%3a%2f%2fwww.apresfurniture.co.uk%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fthumbnail%2f9df78eab33525d08d6e5fb8d27136e95%2fs%2fp%2fsp-503_aufsatz_f60051_6930.jpg&ehk=2LVVMAXhA3EU7qW31%2bw8wrS78Sdq%2fDJvXSZhiomBHcI%3d&risl=&pid=ImgRaw&r=0',
    'https://www.apresfurniture.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-513_f61025.jpg',
    'https://i.pinimg.com/originals/bd/56/11/bd5611cd396b9c4e93141f7af1e21848.jpg',
    'https://i.pinimg.com/originals/95/b2/11/95b2112fdd1d49df4299e85f8d03ffc6.jpg',
  ];

  const contentList: Content[] = [
    {
      id: 1,
      title: 'Ilana',
      description: 'A selectional sofa is an L shaped sofa that can make a great addition to your living room based on your needs type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was',
      price: '$ 430.987',
      reviews: '441 reviews',
      color: 'Color',
      buttonText1: 'Buy Now',
      buttonText2: 'Add to basket',
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string>(imageUrls[0]);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  const handleColorChange = (color: number) => {
    setSelectedColor(color);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className='hole-container'>
      <div className='container1'>
        <div className='container2'>
          <div className='img1'>
            <img
              src={selectedImage}
              alt="img"
              className='img'
              style={{
                filter: selectedColor ? `hue-rotate(${selectedColor}deg)` : 'none',
              }}
            />
          </div>
          <div className='images'>
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(imageUrl)}
                className={`cart ${selectedImage === imageUrl ? 'selected' : ''}`}
              >
                <img
                  src={imageUrl}
                  alt=""
                  className='image-item'
                  style={{
                    filter: selectedColor ? `hue-rotate(${selectedColor}deg)` : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='container3'>
          {contentList.map((content) => (
            <div key={content.id} className='content-item'>
              <h1 className='heading1'>{content.title}</h1>
              <p className='paragraph'>{content.description}</p>
              <h2>{content.price}</h2>
              <h6 className='reviews'>{content.reviews}</h6>
              <h3 className='color'>{content.color}</h3>
              <div className='color-container'>
                <p className='btn1'  onClick={() => handleColorChange(0)}></p>
                <p className='btn2'  onClick={() => handleColorChange(120)}></p>
                <p className='btn3'  onClick={() => handleColorChange(240)}></p>
                 <p className='btn4'  onClick={() => handleColorChange(0)}></p>
              </div>
              <button type="button" className='bg-white text-black p-2 rounded-md border-solid border-black border-2 w-28 mr-2'>{content.buttonText1}</button>
              <button type="button" className='bg-slate-950 text-white p-2 rounded-md'>{content.buttonText2}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
