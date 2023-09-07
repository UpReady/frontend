import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const apiUrl = process.env.REACT_APP_API_URL;

function UserProfile() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${apiUrl}/profile/myProfile`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Veri çekme hatası:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      profile
      {console.log("datalar", data)}
    </Container>
  );
}

export default UserProfile;
