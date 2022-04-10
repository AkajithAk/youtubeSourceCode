import React, { useState } from 'react';
import './ImageSlider.css';
function ImageSlider() {
  
  const imgs=[
    {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
    {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
      <img src={wordData.value} height="300" width="500" /> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
