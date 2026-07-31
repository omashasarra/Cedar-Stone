import { useEffect, useRef, useState } from "react";

export default function StoneImageCycler({
  images,
  alt,
  className = "",
  intervalMs = 5000, // Kept at 5 seconds as requested
  delayMs = 0, // Controls sequential timing (Left -> Middle -> Right)
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    // Start timer after the specific delay to stagger the cards
    const startTimer = setTimeout(() => {
      // First picture switch happens after initial delay
      setIndex((prev) => (prev + 1) % images.length);

      // Then continue looping every intervalMs (3s)
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, intervalMs);
    }, delayMs);

    return () => {
      clearTimeout(startTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images?.length, intervalMs, delayMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
