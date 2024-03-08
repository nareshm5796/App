const Login = () => {
    return <div className="d-flex align-items-center flex-column justify-content-center mt-4" style={{height: "92vh"}}>
           
            <form class=" d-flex align-items-center flex-column justify-content-evenly border border-white bg-white text-center rounded">
                    <h2 class='log-in font-weight-bolder' >LogIn</h2>
                <div class='log-in w-75'>
                    <div class='log-in'><input type="text" placeholder="Enter username"/></div>
                    <div class='log-in'><input type="password" placeholder="Enter Password"/></div>
                    <div class='log-in'> 
                        <a href="#1">Forget Password ?</a>
                    </div>
                    <div class='log-in'>
                        <button  class='w-75 btn btn-info' type="submit">LogIn</button>
                    </div>
                    
                </div> 
            </form>
            <footer class='text-center'>@copy Right</footer>
    </div>
  };
  
export default Login;
