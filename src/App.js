import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList/JobList";
import JobDetails from "./pages/JobDetails/JobDetails";
import { Container } from "@mui/material";

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <Container>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job-details/:jobTitle" element={<JobDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
