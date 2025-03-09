import MyNavbar from "../../components/navbar/Navbar";
import { Container ,Row , Col} from "react-bootstrap";
import Mainpic from "../../img/mainPic.svg";

import { courseData } from "../../../data";


import CourseItem from "../../components/course/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
function Home(){
    const [courses , setCourses]= useState(courseData)
    return(
        <>
        <MyNavbar/>
        <Container>
            <Row className="align-item-center">
                <Col lg={6}>
                    <h2>خانه</h2>
                    <p style={{textAlign:'justify'}}>

باشگاه ورزشی ما فضایی مناسب برای علاقه‌مندان به ورزش و فعالیت‌های بدنی است. با ارائه تجهیزات پیشرفته و مدرن، ما به شما این امکان را می‌دهیم که به بهترین شکل ممکن به تمرینات خود بپردازید. تیم حرفه‌ای ما شامل مربیان با تجربه و متخصصین در زمینه‌های مختلف ورزشی، آماده‌اند تا به شما در دستیابی به اهداف سلامتی و تناسب اندام کمک کنند.


علاوه بر تمرینات بدنسازی و کاردیو، باشگاه ما انواع کلاس‌های گروهی مانند یوگا، زومبا و پیلاتس را نیز ارائه می‌دهد. ما به اهمیت ایجاد یک جامعه حمایتی و دوستانه برای اعضای خود اعتقاد داریم؛ بنابراین، برنامه‌های اجتماعی و رویدادهای ویژه‌ای را برای تشویق تعامل و ایجاد دوستی میان اعضا برگزار می‌کنیم. به ما بپیوندید و سفر سلامتی و تناسب اندام خود را آغاز کنید!</p>
                </Col>
                <Col lg={6} className="py-4">
                <img src={Mainpic} className="img-fluid" /></Col>
            </Row>
            <Row className="my-5">
                <h2 className="py-5">دوره ها</h2>
                {courses.map(course =>
                    (<Col key={course.id} md={6} lg={4} xl={3} className="py-3" >
                    <CourseItem {...course}/>
                    </Col>)
                )}
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default Home;