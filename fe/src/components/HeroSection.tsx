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

        <h1 className="text-5xl font-bold">
          Tìm kiếm, Nộp đơn & <br /> Nhận công việc{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            mơ ước của bạn
          </span>
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Khám phá hơn{" "}
          <span className="font-medium text-gray-800">10,000+</span> cơ hội từ
          các công ty hàng đầu.
        </p>

        <div className="relative w-[46%] mx-auto">
          <div className="flex shadow-lg border-0 border-gray-200 rounded-full items-center h-12">
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
              className="outline-none border-none w-full rounded-l-full px-6 h-full py-3"
            />
            <Button
              onClick={() => searchJobHandler()}
              variant="default"
              className="rounded-r-full bg-[#6a38c2] hover:opacity-90 cursor-pointer transition-all duration-200 h-12 w-12 p-3 flex items-center justify-center"
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
