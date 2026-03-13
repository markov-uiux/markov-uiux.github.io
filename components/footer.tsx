export function Footer() {
  return (
    <footer className="py-16 border-t" style={{ backgroundColor: "#232323", borderColor: "#333" }}>
      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
        {/* Name and year on one line with space between */}
        <div className="flex items-baseline justify-between w-full">
          <p
            className="font-bold leading-none tracking-tight uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 7vw, 6rem)",
              color: "#ffffff",
            }}
          >
            © VALERII MARKOV
          </p>
          <p
            className="font-bold leading-none tracking-tight uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 7vw, 6rem)",
              color: "#ffffff",
            }}
          >
            2026
          </p>
        </div>
        <p
          className="mt-3 text-xs uppercase tracking-widest"
          style={{ color: "#666666", fontFamily: "var(--font-sans)" }}
        >
          All rights reserved
        </p>
      </div>
    </footer>
  )
}
