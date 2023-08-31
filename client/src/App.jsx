import { Navbar, Footer } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { Route, Routes, Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const user = true; //if user exists push user to different page
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="user-auth" state={{ from: location }} replace />
  ); //if user dont exist
}

function App() {
  const user = {};
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
          <Route path="/find-jobs" element={<FindJobs />} />
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
          <Route path={"job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
