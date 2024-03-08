const Signup = () => {
    return <div className="d-flex  align-items-center justify-content-center flex-column mt-5" style={{height: "90vh"}}>
                <form class=" d-flex align-items-center flex-column justify-content-evenly border border-white bg-white text-center rounded">
                    <h2 class='log-in font-weight-bolder' >Register</h2>
                <div class='log-in w-75'>
                    
                    <input class='log-in' type="text" placeholder="Enter username"/>
                    <input class='log-in' type="password" placeholder="Enter Password"/>
                    <input class='log-in' type="password" placeholder="Conform Password"/>
                    <div class='log-in'> 
                        <input type='checkbox'></input><a href="#1"> Terms and Conditions</a>
                    </div>
                    <div class='log-in'>
                        <button  class='w-75 btn btn-info' type="submit">Submit</button>
                    </div>
                </div> 
            </form>
                <footer class='text-center'>copy Right</footer>
    </div>
    
  };
  
  export default Signup;