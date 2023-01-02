import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import { CgTrash, CgAddR } from "react-icons/cg";
import { Container, StyledUl } from "./style";
import AddTechModal from "../../components/AddTechModal";
import { TechContext } from "../../contexts/TechContext";

export default function HomePage() {
  const { userInfo, techList, setTechList, loading } = useContext(UserContext);
  const { addTechModal, setAddTechModal, removeTech } = useContext(TechContext);

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      {userInfo ? (
        <Container className="headline">
          {addTechModal && <AddTechModal />}
          <nav>
            <h1 className="title1">Kenzie Hub</h1>
            <button onClick={logout}>Logout</button>
          </nav>
          <header>
            <h2 className="title1">Hello, {userInfo.name}</h2>
            <p>{userInfo.course_module}</p>
          </header>
          <main>
            <div>
              <h3 className="title2">Technologies</h3>
              <button
                onClick={() => {
                  setAddTechModal(true);
                }}
              >
                <CgAddR />
              </button>
            </div>

            <StyledUl>
              {techList.map((techno) => {
                return (
                  <li key={techno.id}>
                    <p className="headlineBold">{techno.title}</p>
                    <div>
                      <p className="headline">{techno.status}</p>
                      <button
                        onClick={() => {
                          removeTech(techno);
                        }}
                      >
                        <CgTrash />
                      </button>
                    </div>
                  </li>
                );
              })}
            </StyledUl>
          </main>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
