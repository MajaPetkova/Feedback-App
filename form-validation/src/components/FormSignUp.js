import UseForm from "../UseForm";

export const FormSignUp = () => {
    const{handleChange, values, handleSubmit}= UseForm();
  return <div>
    <div className="form-container-right">
      <form className="form" onSubmit={handleSubmit}>
         <h1>Get started with us today?
            Create your account by filling out the information bellow </h1>
         <div className="inputs">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" placeholder="Enter your username" className="form-input" name="username" id="username" value={values.username} onChange={handleChange}/>
         </div>
         <div className="inputs">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" placeholder="Enter your email" className="form-input" name="email"id="email" value={values.email} onChange={handleChange}/>
         </div>
         <div className="inputs">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" placeholder="Enter your password" className="form-input" name="password" id="password" value={values.password} onChange={handleChange} />
         </div>
         <div className="inputs">
            <label htmlFor="repassword" className="form-label">Password</label>
            <input type="repassword" placeholder="Repeat your password" className="form-input" name="repassword" id="repassword"value={values.repassword} onChange={handleChange} />
         </div>
         <button className="form-btn" type="submit">Sign up</button>
         <span>Already have an account? Please Login <a href="#">here</a> </span>
      </form>
    </div>
  </div>;
};
