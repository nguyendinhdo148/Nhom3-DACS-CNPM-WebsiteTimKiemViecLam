import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Toaster } from "react-hot-toast";
import Jobs from "./components/pages/Jobs";
import Browse from "./components/pages/Browse";
import Profile from "./components/pages/Profile";
import JobDescription from "./components/pages/JobDescription";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import ScrollRestoration from "./components/pages/components/ScrollRestoration";
import RecruiterLayout from "./components/recruiter/RecruiterLayout";
import Recruiter from "./components/recruiter/screeens/Recruiter";
import Company from "./components/recruiter/screeens/Company";
import JobManager from "./components/recruiter/screeens/JobManager";
import Candidates from "./components/recruiter/screeens/Candidates";
import AppliedJob from "./components/pages/AppliedJob";
import SavedJobs from "./components/pages/SavedJobs";
import LandingPage from "./components/resume/LandingPage";
import EditResume from "./components/resume/ResumeUpdate/EditResume";
import DashboardResume from "./components/resume/Home/DashboardResume";
import AdminLayout from "./components/admin/AdminLayout";
import Admin from "./components/admin/screeens/Admin";
import CompanyAdmin from "./components/admin/screeens/CompanyAdmin";
import JobManagerAdmin from "./components/admin/screeens/JobManagerAdmin";
import UserManagerAdmin from "./components/admin/screeens/UserManagerAdmin";
import Meetings from "./components/recruiter/screeens/meetings";
import Chat from "./components/pages/Chat";
import ToolsPage from "./components/pages/ToolsPage";

// Tools detail pages
import MBTIPage from "./components/pages/tools/MBTI/MBTIPage";
import MBTITest from "./components/pages/tools/MBTI/MBTITest";
import MBTIResult from "./components/pages/tools/MBTI/MBTIResult";
import INFPPage from "./components/pages/tools/MBTI/infp";
import INFJPage from "./components/pages/tools/MBTI/infj";
import INTJPage from "./components/pages/tools/MBTI/intj";
import INTPPage from "./components/pages/tools/MBTI/intp";
import ISTJPage from "./components/pages/tools/MBTI/istj"; 
import ISFJPage from "./components/pages/tools/MBTI/isfj";
import ISTPPage from "./components/pages/tools/MBTI/istp"; 
import ISFPPage from "./components/pages/tools/MBTI/isfp"; 
import ESTPPage from "./components/pages/tools/MBTI/estp";
import ESFPPage from "./components/pages/tools/MBTI/esfp"; 
import ENFPPage from "./components/pages/tools/MBTI/enfp"; 
import ENTPPage from "./components/pages/tools/MBTI/entp"; 
import ESTJPage from "./components/pages/tools/MBTI/estj"; 
import ESFJPage from "./components/pages/tools/MBTI/esfj"; 
import ENFJPage from "./components/pages/tools/MBTI/enfj"; 
import ENTJPage from "./components/pages/tools/MBTI/entj"; 

import MIPage from "./components/pages/tools/MI/MIPage";
import MITest from "./components/pages/tools/MI/MITest";
import MIResult from "./components/pages/tools/MI/MIResult";
import SalaryCalculator from "./components/pages/tools/salary-converter";
import TaxCalculatorPage from "./components/pages/tools/TaxCalculator";
import CompoundInterestPage from "./components/pages/tools/CompoundInterestPage";
import UnemploymentInsurancePage from "./components/pages/tools/UnemploymentInsurancePage";
import SocialInsurancePage from "./components/pages/tools/SocialInsurancePage";
import SavingPlannerPage from "./components/pages/tools/SavingPlannerPage";
import InterviewAIPage from "./components/pages/tools/interviewAI";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        {/* User routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applied-jobs" element={<AppliedJob />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/jobs/description/:id" element={<JobDescription />} />
        <Route path="/chat" element={<Chat />} />

        {/* Tools routes */}
        <Route path="/tools" element={<ToolsPage />} />

        <Route path="/tools/mbti" element={<MBTIPage />} />
        <Route path="/tools/mbti/test" element={<MBTITest />} />
        <Route path="/tools/mbti/result" element={<MBTIResult />} />
        <Route path="/tools/mbti/tinh-cach/infp" element={<INFPPage />} />
        <Route path="/tools/mbti/tinh-cach/infj" element={<INFJPage />} />
        <Route path="/tools/mbti/tinh-cach/intj" element={<INTJPage />} />
        <Route path="/tools/mbti/tinh-cach/intp" element={<INTPPage />} />
        <Route path="/tools/mbti/tinh-cach/istj" element={<ISTJPage />} />
        <Route path="/tools/mbti/tinh-cach/isfj" element={<ISFJPage />} />
        <Route path="/tools/mbti/tinh-cach/istp" element={<ISTPPage />} />
        <Route path="/tools/mbti/tinh-cach/isfp" element={<ISFPPage />} /> 
        <Route path="/tools/mbti/tinh-cach/estp" element={<ESTPPage />} /> 
        <Route path="/tools/mbti/tinh-cach/esfp" element={<ESFPPage />} /> 
        <Route path="/tools/mbti/tinh-cach/enfp" element={<ENFPPage />} /> 
        <Route path="/tools/mbti/tinh-cach/entp" element={<ENTPPage />} /> 
        <Route path="/tools/mbti/tinh-cach/estj" element={<ESTJPage />} /> 
        <Route path="/tools/mbti/tinh-cach/esfj" element={<ESFJPage />} /> 
        <Route path="/tools/mbti/tinh-cach/enfj" element={<ENFJPage />} /> 
        <Route path="/tools/mbti/tinh-cach/entj" element={<ENTJPage />} /> 
        
      
        <Route path="/tools/mi" element={<MIPage />} />
        <Route path="/tools/mi/test" element={<MITest />} />
        <Route path="/tools/mi/result" element={<MIResult />} />
        <Route path="/tools/salary-converter" element={<SalaryCalculator />} />
        <Route path="/tools/tax-calculator" element={<TaxCalculatorPage />} />
        <Route path="/tools/social-insurance" element={<SocialInsurancePage />} />
        <Route path="/tools/compound-interest" element={<CompoundInterestPage />} />
        <Route path="/tools/unemployment-insurance" element={<UnemploymentInsurancePage />} />
        <Route path="/tools/saving-planner" element={<SavingPlannerPage />} /> 
        <Route path="/tools/interview-ai" element={<InterviewAIPage />} />
        

        {/* Recruiter routes */}
        <Route path="/recruiter" element={<RecruiterLayout />}>
          <Route index element={<Recruiter />} />
          <Route path="/recruiter/company" element={<Company />} />
          <Route path="/recruiter/jobs" element={<JobManager />} />
          <Route path="/recruiter/candidates" element={<Candidates />} />
          <Route path="/recruiter/meetings" element={<Meetings />} />
          <Route path="/recruiter/chat" element={<Chat />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="/admin/company" element={<CompanyAdmin />} />
          <Route path="/admin/jobs" element={<JobManagerAdmin />} />
          <Route path="/admin/user" element={<UserManagerAdmin />} />
        </Route>

        {/* Resume routes */}
        <Route path="/resume" element={<LandingPage />} />
        <Route path="/resume/dashboard-resume" element={<DashboardResume />} />
        <Route path="/resume/edit/:resumeId" element={<EditResume />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
    </>
  );
}

export default App;
