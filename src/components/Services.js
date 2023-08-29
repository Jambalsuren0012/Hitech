import Card from "./card/Card";
function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">Үйлчилгээ</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Мэдээлэл технологийн үйлчилгээ"
                img="card1.png"
                text="Сервер болон Стореж гадаад дотоод сүлжээний зохион байгуулалт, тохиргоо суурилуулалт "
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Microsoft 365 үйлчилгээ"
                img="card2.png"
                text="AD DC file share, file permission, IT security Firewall setup installation"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Системийн интеграцийн шийдэл, суурилуулалт, үйлчилгээ"
                img="card3.png"
                text="Сүлжээ суурилуулалт, Сервер болон файл серверийн шийдэл,
                Дотоод сүлжээний загварчлал"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="GPS Суурилуулалт, түлшний төхөөрөмж суурилуулалт"
                img="card3.png"
                text="Tом оврийн машин, механизмд түлшний төхөөрөмж суурилуулна, GPS-н эвдрэл гэмтлийг дуудлагаар хурдан шуурхай засаж үйлчилнэ"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
