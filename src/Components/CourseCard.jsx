import React from 'react';

// Sub-component to be rendered multiple times
function Item({ name, imgSrc }) {
  return (
    <div class='card d-flex justify-content-center align-item-center'>
      <img src={imgSrc} class="card-img-top" alt={ name + ' img is not availble'} />
      <h3 class="card-title text-center" >{name}</h3>
    </div>
  );
}

// Parent component rendering multiple instances of the sub-component
function CourseCard() {
  const itemsData = [
    {name : "Python", imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    {name : "Java", imgSrc : "img" },
    {name : "React", imgSrc : "img" },
  ];

  return (
    <div >
      {itemsData.map((item, index) => (
        <Item key={index} name={item.name} imgSrc={item.imgSrc} />
      ))}
    </div>
  );
}

export default CourseCard;
