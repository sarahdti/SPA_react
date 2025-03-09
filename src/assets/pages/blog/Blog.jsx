import { Link, Outlet} from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import './Blog.css'

function Blog(){
    return(
        <div className="articleWrapper">
        <MyNavbar/>
        <h1>صفحه مقالات</h1>
        <hr />
        <div className="btnContainer">
            <Link to='yoga' className="linkBtn">یوگا</Link>
            <Link to='workout' className="linkBtn">بدنسازی</Link>
            <Link to='pilates' className="linkBtn">پیلاتس</Link>
            
        </div>
        <hr />
        <Outlet/>
        </div>
        
    )
}
export default Blog;