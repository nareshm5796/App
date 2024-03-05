import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSection from '../Components/LeftSection';
import RightSection from '../Components/RightSection';

const Home = () => {
    
    return <div>
        <div class="body d-flex align-items-start flex-column" style={{height: "92vh"}}>
                <div class="mb-auto p-2 bd-highlight">
                        <div>
                                <LeftSection/>
                        </div>
                        <div>
                                <RightSection/>
                        </div>
                        </div>
                <div class="p-2 bd-highlight" style={{height: "10vh"}}>Footer</div>
           </div>
        </div>
  };
  
  export default Home;