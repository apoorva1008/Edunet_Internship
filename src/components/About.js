import User from "./User";
import UserClass from "./UserClass";
const About =()=>{
    return(
        <div>
        <h1>About</h1>
        <h2>This is our Food Ordering System</h2>
        <User name={"Sushil"} place={"Pune"}/>
        <UserClass name={"Sushil"} place={"Pune"} />
        </div>
    )
}

export default About;