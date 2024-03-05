const Login = () => {
    return <div className="d-flex align-items-center flex-column mt-5" style={{height: "85vh"}}>
        <h4>
            LogIn
        </h4>
        <form class="d-flex flex-column p-4 border border-secondary rounded">
            <input type="text" placeholder="Enter username"/>
            <input type="password" placeholder="Enter Password"/>
            <div> 
                <input type="checkbox"/>
                <a href="#1">Terms and Conditions</a>
            </div>
            <button class="btn btn-success btn-sm" type="submit">LogIn</button>
        </form>
        <footer class='text-center'>copy Right</footer>
    </div>
  };
  
export default Login;
