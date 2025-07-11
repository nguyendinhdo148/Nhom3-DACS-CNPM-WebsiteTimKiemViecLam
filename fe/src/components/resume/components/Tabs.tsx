// import { Button } from "@/components/ui/button";

interface Tab {
  label: string;
}

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="my-2">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`relative px-3 md:px-4 py-2 border-b-3 text-sm font-medium ${
              activeTab === tab.label
                ? "text-purple-500"
                : "text-gray-100 hover:text-gray-200"
            } cursor-pointer`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center">
              <span className="text-[14px] font-semibold text-purple-700">
                {tab.label}
              </span>
            </div>
            {activeTab === tab.label && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-r from-purple-500/85 to-purple-700"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
