import logo from "./hitechlogo.png";
function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center ">
            <img alt="about" src={logo} className="img-fluid logo" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Бидний тухай</h2>
            <p className="main-p">
              Манай компани анх 2013 оноос мэдээлэл технологийн салбарт гадаад
              худалдаа, компьютерийн засвар, түүний дагалдах төхөөрөмж
              борлуулалтын чиглэлээр үйл ажиллагаагаа явуулж эхэлсэн 100 хувь
              дотоодын хөрөнгө оруулалттай компани юм. Бид бүхэн өндөр мэдлэг,
              ур чадвар, бүтээлч сэтгэлгээ, шинэ технологийг эх орондоо
              нэвтрүүлэхийн зэрэгцээ, захиалагч болон харилцагчийнхаа нэр хүнд,
              эрх ашгийг тэргүүн эгнээнд тавьж, урт хугацааны найрсаг найдвартай
              хамтын ажиллагааг эрхэмлэн, чанарын өндөр түвшинд хийж
              гүйцэтгэхийн ямагт эрмэлзэж ажилладаг. Манай компани нь дэлхийд
              нэр хүндтэй албан ёсны Canon, Dell, Kaspersky, Konica Minolta,
              APC, Solarwinds, Oracle-ийн албан ёсны гэрээт борлуулагч бөгөөд
              чанартай сервис үйлчилгээний хамтаар дэвшилтэд технологийг
              хэрэглэгчидэд цаг алдалгүй хүргэхийг зорилт болгон ажиллаж байна.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
