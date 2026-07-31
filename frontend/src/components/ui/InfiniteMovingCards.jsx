import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );

      const durations = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed] ?? "40s",
      );

      setStart(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full h-[500px] md:h-auto overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col md:flex-row w-full md:w-max md:min-w-full shrink-0 flex-nowrap gap-6 py-4 will-change-transform",
          start && "animate-scroll-v md:animate-scroll",
        )}
      >
        {items.map((p, idx) => (
          <li
            key={`${p.id}-${idx}`}
            className="relative w-full md:w-[320px] h-[280px] md:h-[560px] flex-shrink-0 overflow-hidden shadow-xl"
          >
            <Link
              to="/projects"
              aria-label={p.title}
              className="block w-full h-full"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className={cn("absolute inset-0 bg-gradient-to-tr", p.swatch)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-white text-lg">{p.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
