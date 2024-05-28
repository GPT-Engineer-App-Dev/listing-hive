import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddJob from "./pages/AddJob.jsx";
import ApplyJob from "./pages/ApplyJob.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;
