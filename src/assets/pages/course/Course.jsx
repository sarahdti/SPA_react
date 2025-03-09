import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { courseData } from "../../../data";
import { Col, Container, Row } from "react-bootstrap";

function Course(){
    let courseId = useParams().courseId;
    let courseInfo = courseData.find(course =>course.id ==courseId)
    console.log(courseInfo)
    return(
        <>
        <MyNavbar/>
        <Container>
            <Row className="align-item-center">
                <Col md={5}>
                <img style={{height:'400px'}} src={courseInfo.img} />
                </Col>
                <Col className="my-3" md={7}>
                <h3 style={{fontFamily:'Lalezar'}}>{courseInfo.title}</h3>
                <h5>{courseInfo.text}</h5>
                <p style={{textAlign:'justify'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Course;