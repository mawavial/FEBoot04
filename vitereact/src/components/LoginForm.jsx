import { createElement } from "react";

export const LoginForm = () => {

  //nao use isso:
  return ( createElement("div", { }, createElement("h1", {}, <p>"Login"</p>)))



  // return (
  //   <div style={{ 
  //     backgroundColor:"rebeccapurple",
  //      height:"100vh",
  //       display:"flex",
  //       width:"50%",
  //        justifyContent:"center",
  //         alignItems:"center"
  //   }}>
  //     <h1>Login</h1>
  //   </div>
}