"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // ページ読み込み時に前回の設定を読み込む
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const dark = html.classList.contains("dark");
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <main style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <button type="button" onClick={toggleTheme}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </main>
  );
}

