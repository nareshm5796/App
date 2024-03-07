import React from 'react';

// Sub-component to be rendered multiple times
function Item({ name, imgSrc }) {
  return (
    <div class='card' >
      <img src={imgSrc} class="card-img-top" style={{height:"100PX"}} alt={ name + ' img is not availble'} />
      <h3 class="card-title text-center" >{name}</h3>
    </div>
  );
}

// Parent component rendering multiple instances of the sub-component
function CourseCard() {
  const itemsData = [
    {name : "Python", imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    {name : "Java", imgSrc : "https://banner2.cleanpng.com/20180517/zve/kisspng-java-programmer-computer-programming-logo-5afe2f1dcf9897.0745314915266076458503.jpg" },
    {name : "React", imgSrc : "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" },
    {name : "Python", imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    {name : "Python", imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    {name : "Python", imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    {name : "React", imgSrc : "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" },
    {name : "React", imgSrc : "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" },
  ];

  return (
    <div className="app1">
      {itemsData.map((item, index) => (
        <Item key={index} name={item.name} imgSrc={item.imgSrc} />
      ))}
    </div>
  );
}

export default CourseCard;
