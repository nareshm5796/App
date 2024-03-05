import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from '../Components/LeftSection';
import RightSection from '../Components/RightSection';

const Home = () => {
    
    return <div>
        <div class="d-flex flex-column w-100 " style={{height: "90vh"}}>
                <div class="row h-100 w-100 d-flex align-item-center justify-content-center m-0 p-0 bd-highlight ">
                        <div class='col-7 mt-0 l-home' >
                                <LeftSection/>
                        </div>
                        <div class='col-5 r-home'>
                                <RightSection/>
                        </div>
                        </div>
                <footer class='text-center'>copy Right</footer>
           </div>
        </div>
  };
  
  export default Home;