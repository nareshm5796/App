import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from '../Components/LeftSection';
import RightSection from '../Components/RightSection';

const Home = () => {
    
    return <div>
        <div class="d-flex flex-column w-100" style={{height: "90vh"}}>
                <div class="mb-auto p-2 bd-highlight">
                        <div>
                                <LeftSection/>
                        </div>
                        <div>
                                <RightSection/>
                        </div>
                        </div>
                <footer class='text-center'>copy Right</footer>
           </div>
        </div>
  };
  
  export default Home;