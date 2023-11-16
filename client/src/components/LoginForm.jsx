const emptyForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  

  return (
    <div className="flex flex-col space-y-4">
      <label>
        Email
        <input type="email" className="block w-full mt-1" />
      </label>
      <label>
        Password
        <input type="password" className="block w-full mt-1" />
      </label>
      <div className="flex items-center justify-between">
  <label className="flex items-center space-x-2">
    <input type="checkbox" />
    <span>Remember me</span>
  </label>
  <button className="text-blue-500 ml-4">Forgot password?</button>
</div>

      <button className="bg-blue-500 text-white py-2 rounded">Log in</button>
      <button className="bg-red-500 text-white py-2 rounded">Continue with Google</button>
      <div className="flex items-center justify-center space-x-2">
        <span>Dont have an account?</span>
        <button className="text-blue-500">Sign up</button>
      </div>
    </div>
  );
}

export default LoginForm;
