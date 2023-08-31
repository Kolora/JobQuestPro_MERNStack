import { Navbar, Footers } from "./components";
import {
  About,
  Auth,
  Companies,
  CompanyProfile,
  FindJob,
  JobDetails,
  UploadJob,
  UserProfile,
} from "./pages";
import {
  Route,
  Routes,
  Outlet,
  Navigate,
  useLocations,
} from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocations();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="user-auth" state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className="App">
      <h1
        className="text-3xl font-bold border-solid border-blue-700 text-black ring-2"
        text-center
      >
        JobQuestPro
      </h1>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/find-jobs" replace={true} />}
          />
          <Route path="/find-jobs" element={<FindJob />} />
          <Route path="/companies" element={<Companies />} />
          <Route
            path={
              user?.user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"company-profile"} element={<CompanyProfile />} />
          <Route path={"company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"upload-job"} element={<UploadJob />} />
          <Route path={"job-detail/:id"} element={<JobDetails />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="/user-auth" element={<Auth />} />
      </Routes>
      <Footers />
    </main>
  );
}

export default App;
