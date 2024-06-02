

type User={
    username:String,
    password:String
  }
  
export default function Login_button(formdata:User){
    return(
        <button className="w-2/5 bg-black rounded-md border rounded m-auto mr-auto mt-10 h-12" onClick={(e)=>{
            e.preventDefault();
            console.log("Login");
            console.log(formdata.username);
          }}>Login</button>
    );
}