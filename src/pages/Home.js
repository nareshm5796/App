import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from '../Components/LeftSection';
import RightSection from '../Components/RightSection';
import CourseCard from '../Components/CourseCard';
import Component from '../Components/Component';
import Contact from '../Components/Contact';

const Home = () => {
   
    return <div class='header d-flex flex-column justify-content-center align-item-center'>
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
        <div class='fluid-container  p-4  mt-2' >
                <h1 class='m-4  pt-3 text-center font-monospace' style={{color:'red'}}>We are Ofering....</h1>
                <div className='container border border-secondary rounded text-center p-3' >
                        <CourseCard/> 
                </div>       
        </div>
        {/* books-------------------------------------- */}
        <div className='fluid-container p-4  mt-2 border border-secondary'>
                <Component/>
        </div>

        <div className='container' >
                <Contact/>
        </div>

        

        <footer class='text-center home-footer'>copy Right</footer>

</div>
        
  };
  
  export default Home;



    
  




