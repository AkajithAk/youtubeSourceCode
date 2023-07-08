import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TextSlider from './Components/TextSlider/TextSlider';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import DarkToLight from './Components/DarkToLight/DarkToLight';
import TranslationEngToTamil from './Components/TranslationEngToTam/TranslationEngToTam';
import Details from './Components/Details/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ImageSlider />
);
