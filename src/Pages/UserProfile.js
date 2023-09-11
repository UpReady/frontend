import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Styles/UserProfile.css";
import Form from "react-bootstrap/Form";

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
        <div className="profile-basics row">
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
              <Form.Control type="text" placeholder={data?.profile?.lastName} />
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
      </Form>
      {console.log("datalar", data)}
    </Container>
  );
}

export default UserProfile;
