import type { Resume } from "@/types/resume";
import Progress from "../components/Progress";

interface Props {
  languages: Resume["languages"];
  accentColor: string;
  bgColor: string;
}

interface LanguageProps {
  language: string;
  progress: number;
  accentColor: string;
  bgColor: string;
}

const LanguageInfo = ({
  language,
  progress,
  accentColor,
  bgColor,
}: LanguageProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className={`text-[12px] font-semibold text-gray-900`}>{language}</p>
      {progress > 0 && (
        <Progress
          progress={(progress / 100) * 5}
          color={accentColor}
          bgColor={bgColor}
          total={5}
        />
      )}
    </div>
  );
};

const LanguageSection = ({ languages, accentColor, bgColor }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {languages?.map((language, index) => (
        <LanguageInfo
          key={`language_${index}`}
          language={language.name}
          progress={language.progress}
          accentColor={accentColor}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
};

export default LanguageSection;
