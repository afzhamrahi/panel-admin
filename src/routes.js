import Home from "./Components/pages/Home/Home"
import UserList from "./Components/pages/Users/UserList/UserList"
import NewUser from "./Components/pages/NewUser/UserNew"
import Products from "./Components/pages/Products/Products"

let routes =[
    {path:"/"         , element:<Home />      }, 
    {path:"/users"    , element:<UserList />  }, 
    {path:"/newUsers" , element:<NewUser />   }, 
    {path:"/products" , element:<Products />   }, 
    
]
export default routes;