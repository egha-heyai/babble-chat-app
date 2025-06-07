const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-100 via-base-200 to-base-100 p-12 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-primary/30 rounded-full animate-bounce blur-sm"
            style={{
              top: `${30 + i * 20}%`,
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-md text-center relative z-10">
        {/* Chat grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 relative">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl relative group
                shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                border border-base-300
                ${
                  i % 2 === 0
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 animate-pulse"
                    : "bg-gradient-to-br from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 animate-bounce"
                }
              `}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + (i % 2)}s`,
              }}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-1 rounded-xl bg-base-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Typing dots */}
              {i % 3 === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 bg-primary rounded-full animate-ping"
                        style={{ animationDelay: `${dot * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Chat icons */}
              {i % 4 === 1 && (
                <div className="absolute inset-0 flex items-center justify-center text-base-content/60">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              )}

              {/* Center crosshair */}
              {i === 4 && (
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
                  <div className="absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Connecting path */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none text-base-content"
            viewBox="0 0 100 100"
          >
            <path
              d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="3,3"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </h2>
          <p className="text-base-content/80 leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>

        {/* Status indicators */}
        <div className="absolute -top-3 -right-3 w-4 h-4 bg-success rounded-full animate-pulse shadow-lg border-2 border-base-100" />
        <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-info rounded-full animate-ping shadow-lg border border-base-100" />
      </div>
    </div>
  );
};

export default AuthImagePattern;
