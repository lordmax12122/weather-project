import { Header } from './components/Header/header';
import { Hero } from './components/Hero/hero';
import { Weather } from './components/Weather/weather';
import { PetsStories } from './components/PetsStories/petsStories';
import { FeelsLike } from './components/FeelsLike/feelslike';
import { ForecastPrediction } from './components/ForecastPrediction/forecastPrediction';
import { EightDayForecast } from './components/EightDayForecast/eightDayForecast';
import MySlider from './components/PhotoGallery/photoGallery';
import { Footer } from './components/Footer/footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Weather></Weather>
      <PetsStories></PetsStories>
      <MySlider></MySlider>
      <FeelsLike></FeelsLike>
      <ForecastPrediction
  labels={["11 pm", "12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am"]}
  temperatures={[14, 12, 11, 10, 10, 9, 11, 13, 14]}
/>
<EightDayForecast></EightDayForecast>
      <Footer></Footer>

    </div >
  );
}

export default App;
