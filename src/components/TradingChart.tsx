import { useEffect, useRef, useState } from "react";

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    // Observe class changes on <html> to detect dark mode toggle
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "1",
      timezone: "Etc/UTC",
      theme: theme, // 👈 Dynamically change theme
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_legend: true,
      hide_volume: false,
      hide_side_toolbar: true,
      container_id: "tradingview_chart",
    });

    if (chartContainerRef.current) {
      chartContainerRef.current.innerHTML = "";
      chartContainerRef.current.appendChild(script);
    }
  }, [theme]); // 👈 Re-run effect when theme changes

  return (
    <div className="dark:bg-black bg-white rounded-lg shadow-lg p-4 transition-colors duration-300">
      <div ref={chartContainerRef} className="w-full h-[500px]" id="tradingview_chart"></div>
    </div>
  );
}
