import Card from "./Card";
function Partners() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">Харилцагч байгууллага</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card title="TTJVCO" img="ttjvco.jpeg" />
            </div>
            <div className="col-md-4 mb-2">
              <Card img="hiid.png" title="Зүүн хүрээ Дашчойлон хийд" />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="Мандах их сургууль" img="mandah.png" />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="UBM" img="umb.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card title="TIKA" img="tika.png" />
            </div>
            <div className="col-md-4 mb-2">
              <Card img="steppe.png" title="STEPPE GOLD" />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="Үндэсний статистикийн хороо" img="sta2.jpeg" />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="Ovoot Tolgoi Resources" img="ovoot.jpeg" />
            </div>
          </div>
        </div>
      </div>

      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card title="Normount" img="normiount.jpeg" />
            </div>
            <div className="col-md-4 mb-2">
              <Card img="intermed.png" title="INTERMED HOSPITAL" />
            </div>
            <div className="col-md-4 mb-2">
              <Card title="WORLD HEALTH ORGANIZATION" img="health.jpeg" />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Хөдөлмөр халамжийн үйлчилгээний ерөнхий газар"
                img="download.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Partners;
