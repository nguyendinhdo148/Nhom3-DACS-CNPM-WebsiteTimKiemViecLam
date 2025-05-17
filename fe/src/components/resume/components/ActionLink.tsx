interface ActionLinkProps {
  icon: React.ReactNode;
  link: string;
  bgColor: string;
}

const ActionLink = ({ icon, link, bgColor }: ActionLinkProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-[25px] h-[25px] flex items-center justify-center rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
      <p className="text-[13px] font-medium underline cursor-pointer break-all max-w-[200px]">
        {link}
      </p>
    </div>
  );
};

export default ActionLink;
