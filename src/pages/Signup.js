const Signup = () => {
    return <div className="d-flex  align-items-center  flex-column mt-5" style={{height: "90vh"}}>
                <div>
                        <h4>
                                Register
                        </h4>
                        <form class="d-flex flex-column p-4 border border-secondary rounded">
                        <input type="mail" placeholder="Enter Your Mail Id"/>
                        <input type="password" placeholder="Create Password"/>
                        <div> 
                                <input type="checkbox"/>
                                <a href="http:/sdd/">I Agree Terms and Conditions</a>
                        </div>
                        <button class="btn btn-success btn-sm" type="submit">SignUp</button>
                        </form>
                </div>
                <footer class='text-center'>copy Right</footer>
    </div>
    
  };
  
  export default Signup;