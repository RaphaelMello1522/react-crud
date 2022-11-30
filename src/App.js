import logo from './logo.svg';
import './App.css';
import Layout from './components/shared/Layout';
import Functionaries from './pages/Functionaries';
import { Route, Routes } from "react-router-dom";
import AddFunctionary from './pages/Functionaries/AddFunctionary';
import UpdateFunctionary from './pages/Functionaries/UpdateFunctionary';
import Jobs from './pages/Jobs/Jobs';
import AddJob from './pages/Jobs/AddJobs';
import UpdateJob from './pages/Jobs/UpdateJobs';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/functionaries" element={<Functionaries />} />
      </Routes>
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Routes>
        <Route path="/jobs-create" element={<AddJob />} />
      </Routes>
      <Routes>
        <Route path="/jobs-update/:id" element={<UpdateJob />} />
      </Routes>
      <Routes>
        <Route path="/functionary-create" element={<AddFunctionary />} />
      </Routes>
      <Routes>
        <Route
          path="/functionary-update/:id"
          element={<UpdateFunctionary />}
        />
      </Routes>
    </Layout>
  );
}
export default App;