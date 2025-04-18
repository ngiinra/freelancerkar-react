import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompeleProfile from "./pages/CompeleProfile";
import NotFound from "./pages/NotFound";
import HomeLayout from "./pages/HomeLayout";
import OwnerDashboard from "./feautures/owner/OwnerDashboard";
import OwnerProjects from "./feautures/owner/OwnerProjects";
import OwnerSingleProject from "./feautures/owner/OwnerSingleProject";
import AddProjectForm from "./feautures/owner/AddProjectForm";
import Profile from "./feautures/owner/Profile";
import ProjectProrosals from "./pages/ProjectProrosals";
import OwnerLayout from "./pages/OwnerLayout";
import FreelancerLayout from "./pages/FreelancerLayout";
import FreelancerDashboard from "./feautures/freelancer/FreelancerDashboard";
import FreelancerProposals from "./feautures/freelancer/FreelancerProposals";
import AllProjects from "./feautures/home/AllProjects";
import FreelancerAddProposal from "./pages/FreelancerAddProposal";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./feautures/admin/AdminLayout";
import AdminDashboard from "./feautures/admin/AdminDashboard";
import AdminUsers from "./feautures/admin/users/AdminUsers";
import ProjectsForAdmin from "./feautures/admin/ProjectsForAdmin";
import ProposalsForAdmin from "./feautures/admin/ProposalsForAdmin";
import CategoriesList from "./feautures/admin/CategoriesList";
import AddCategory from "./feautures/admin/categories/AddCategory";
import Home from "./pages/Home";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster toastOptions={{ className: "text-sm font-vazir text-center" }} />
      <div className="base-color">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="complete-profile" element={<CompeleProfile />} />
          </Route>
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace="true" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<OwnerProjects />} />
            <Route path="projects/add" element={<AddProjectForm />} />
            <Route path="projects/:id" element={<OwnerSingleProject />} />
            <Route
              path="project/:id/proposals"
              element={<ProjectProrosals />}
            />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace="true" />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<FreelancerProposals />} />
            <Route path="project-list" element={<AllProjects />} />
            <Route path="projects/:id" element={<FreelancerAddProposal />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="projects" element={<ProjectsForAdmin />} />
            <Route path="projects/add" element={<AddProjectForm />} />
            <Route path="proposals" element={<ProposalsForAdmin />} />
            <Route path="categories" element={<CategoriesList />} />
            <Route path="categories/add" element={<AddCategory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
