import { Navbar, Footer } from "./components";
import {
  About,
  Auth,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import { Route, Routes, Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// import Register from "./pages/users/Register";
// import Login from "./pages/users/Login";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  // const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // async function getUser(token) {
  //   try {
  //     const response = await axios.get("/api/users", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUser(response.data);
  //   } catch (err) {
  //     console.log(err);
  //     localStorage.removeItem("token");
  //   }
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   let token = localStorage.getItem("token");

  //   if (token) {
  //     getUser(token);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  // let loggedIn = user.username;

  return (
    <main className="bg-[#f7fdfd]">
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

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<Auth />} />
        {/* <>
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {!isLoading && <Route path="*" element={<Navigate to="/login" />} />}
        </> */}
      </Routes>
      {/* if user not logged in dont show footer */}
      {user && <Footer />}
    </main>
  );
}

export default App;
