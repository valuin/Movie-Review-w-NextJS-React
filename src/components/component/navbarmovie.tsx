
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export function Navbarmovie() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100);
    }
  };

  // Inside your component
  const router = useRouter();

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Navigate to a new page with search term as a URL parameter
    router.push(`/search/${searchTerm}`);
  };
  

  return (
    <header className="absolute w-full flex items-center justify-between h-20 px-4 md:px-6 border-b-0 bg-gradient-to-b from-neutral-950">
      <div className="flex items-center gap-14">
        <Link
          className="flex items-center gap-2 ml-1 text-lg font-semibold"
          href="/"
        >
          <FilmIcon className="w-8 h-8" />
          <span className="hidden xs:block">Ticketstubs</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium lg:text-lg">
          <Link className="hover:underline" href="/top-rated">
            Top Rated
          </Link>
          <Link className="hover:underline" href="/popular">
            Popular
          </Link>
          <Link className="hover:underline" href="/genres">
            Genres
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="group rounded-full"
          size="icon"
          variant="ghost"
          onClick={toggleSearch}
        >
          <>
            <SearchIcon className="w-5 h-5 text-white hover:text-gray-900" />
            <span className="sr-only">Search</span>
          </>
        </Button>
        <form
          className={`transition-all duration-100 ease-out overflow-hidden ${
            isSearchOpen ? "w-72" : "w-0"
          }`}
          onBlur={toggleSearch}
          onSubmit={handleSearch}
        >
          <Input
            ref={searchInputRef}
            type="text"
            className="flex flex-wrap rounded-full w-72 justify-center items-center"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="sr-only">
            Search
          </button>
        </form>
        <Link
          href="https://youtube.com/shorts/b51qln8197o?si=DFgkbQGYi06X2Ezy"
          target="_blank"
        >
          <Button className="rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder-user.jpg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">User Menu</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}

function FilmIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" group-hover:text-gray-900"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Navbarmovie;
