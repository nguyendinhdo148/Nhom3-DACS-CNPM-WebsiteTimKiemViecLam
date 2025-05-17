import { Search, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import FullScreenLoader from "./skeletons/FullScreenLoader";
import SuggestionList from "./helpers/SuggestionList";
import axios from "axios";
import { debounce } from "lodash";
import { API } from "@/utils/constant";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isFetchingSuggestions, setIsFetchingSuggestions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = async (selectedQuery?: string) => {
    const finalQuery = selectedQuery || query;
    if (!finalQuery.trim()) return;
    setIsSearching(true);
    dispatch(setSearchedQuery(finalQuery));
    await new Promise((resolve) => setTimeout(resolve, 300));
    navigate(`/browse?query=${finalQuery}`);
    setIsSearching(false);
    setShowSuggestions(false);
  };

  const fetchSuggestions = debounce(async (keyword: string) => {
    try {
      setIsFetchingSuggestions(true);
      const res = await axios.get(`${API}/job/suggestions?keyword=${keyword}`);
      setSuggestions(res.data.suggestions || []);
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    } finally {
      setIsFetchingSuggestions(false);
    }
  }, 300);

  // Bắt sự kiện thay đổi input
  useEffect(() => {
    if (query.trim()) {
      fetchSuggestions(query);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // Bắt sự kiện click với suggestion
  const handleSelectSuggestion = (item: { title: string }) => {
    setQuery(item.title);
    searchJobHandler(item.title);
  };

  // Bắt sự kiện click ra ngoài input để ẩn gợi ý
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-center relative">
      {isSearching && <FullScreenLoader />}

      <div className="flex flex-col gap-5 my-6">
        <span className="mx-auto px-5 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-[#6a38c2] text-sm font-medium tracking-wide border border-purple-100 shadow-sm inline-flex items-center gap-2">
          <span className="animate-pulse">✨</span> Trang web tìm kiếm việc làm
          số 1
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight">
          Tìm kiếm, Nộp đơn & <br /> Nhận công việc{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 animate-gradient">
            mơ ước của bạn
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed">
          Khám phá hơn{" "}
          <span className="font-semibold text-gray-800 bg-yellow-100 px-2 rounded-md">
            10,000+
          </span>{" "}
          cơ hội từ các công ty hàng đầu.
        </p>

        <div className="relative w-[46%] mx-auto">
          <div className="flex items-center h-16 bg-white rounded-full shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <input
              ref={inputRef}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (
                    activeSuggestionIndex >= 0 &&
                    suggestions[activeSuggestionIndex]
                  ) {
                    handleSelectSuggestion(suggestions[activeSuggestionIndex]);
                  } else {
                    searchJobHandler();
                  }
                } else if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveSuggestionIndex((prev) =>
                    Math.min(prev + 1, suggestions.length - 1)
                  );
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveSuggestionIndex((prev) => Math.max(prev - 1, 0));
                }
              }}
              value={query}
              type="text"
              placeholder="Vị trí tuyển dụng, tên công ty, tên thành phố..."
              className="outline-none border-none w-full rounded-l-full px-8 h-full py-3 text-lg placeholder:text-gray-400"
            />
            <Button
              onClick={() => searchJobHandler()}
              variant="default"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 cursor-pointer transition-all duration-300 h-12 w-12 mr-2 flex items-center justify-center shadow-md hover:shadow-lg"
              disabled={isSearching || !query.trim()}
            >
              {isSearching ? (
                <Loader2 className="size-6 text-white animate-spin" />
              ) : (
                <Search className="size-6 text-white" />
              )}
            </Button>
          </div>

          {isFetchingSuggestions && (
            <div className="absolute mt-2 text-sm text-gray-500 px-2">
              Đang tìm gợi ý...
            </div>
          )}

          {showSuggestions && (
            <div ref={suggestionsRef}>
              <SuggestionList
                suggestions={suggestions}
                onSelect={handleSelectSuggestion}
                keyword={query}
                activeIndex={activeSuggestionIndex}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
