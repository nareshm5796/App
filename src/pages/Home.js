import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from '../Components/LeftSection';
import RightSection from '../Components/RightSection';
import CourseCard from '../Components/CourseCard';

const Home = () => {
   
    return <div class='d-flex flex-column justify-content-center align-item-center'>
        <div class="fluid-container d-flex flex-column " style={{height: "100vh"}} >
                <div class="row h-100 w-100 d-flex align-item-center justify-content-center m-0 p-0 bd-highlight ">
                        <div class='col-7  l-home p-4' >
                                <LeftSection/>
                        </div>
                        <div class='col-5 r-home'>
                                <RightSection/>
                        </div>
                </div>
        </div>
        <div class='fluid-container  bg-info p-1 mt-2' >
                <div className='container bg-secondary p-1 ' style={{height: "60vh"}}>
                        <CourseCard/> 
                </div>       
        </div>
        <div className='container' style={{height: "60vh"}}>
                Contact Us
        </div>
        <footer class='text-center home-footer'>copy Right</footer>
        </div>
  };
  
  export default Home;


