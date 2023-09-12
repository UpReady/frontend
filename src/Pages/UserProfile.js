import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import "../Styles/UserProfile.css";
import Form from "react-bootstrap/Form";
import ProfilePic from "../img/profile-pic.png";

const apiUrl = process.env.REACT_APP_API_URL;

function UserProfile() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${apiUrl}/profile/myProfile`, { credentials: "include" })
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <div className="profile-header mt-4 mb-4">Profil Düzenleme</div>
      <Form>
        <div className="row">
          <div className="profile-img-cont col-lg-3 col-12">
            <Image src={ProfilePic} />
          </div>
          <div className="profile-basics row col-lg-9">
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Adınız :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.profile?.firstName}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Soyadınız :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={data?.profile?.lastName}
                />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail adresiniz :</Form.Label>
                <Form.Control type="email" placeholder={data?.email} />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Unvanınız :</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Yaşadığınız Şehir :</Form.Label>
                <Form.Control type="text" placeholder={data?.profile?.city} />
              </Form.Group>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Profil Fotoğrafınız :</Form.Label>
                <Form.Control type="file" placeholder={data?.profile?.city} />
              </Form.Group>
            </div>
          </div>
        </div>
      </Form>
      <div className="row mt-4 pt-4">
        <div className="col-8 col-lg-11">
          <div className="experience-title">Mesleki Deneyimler</div>
        </div>
        <div className="col-4 col-lg-1">
          <button className="profile-btn">+ Ekle</button>
        </div>
      </div>
      <div className="experience-table mt-5 p-4 me-3">
      <div className="row mb-2">
          <div className="col-12 col-lg-3 mb-3 experience-year">2019-2023</div>
          <div className="col-12 col-lg-9 mb-3 experience-name">
            Elektronik ve Haberleşme Mühendisi - <b> Vestel Elektronik </b>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-lg-3 mb-3 experience-year">2019-2023</div>
          <div className="col-12 col-lg-9 mb-3 experience-name">
            Elektronik ve Haberleşme Mühendisi - <b> Vestel Elektronik </b>
          </div>
        </div>
      </div>

      {console.log("datalar", data)}
    </Container>
  );
}

export default UserProfile;
