import NavbarResume from "./NavbarResume";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <div className="pt-16"><NavbarResume /></div>
      <div className="container mx-auto pt-4 pb-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
