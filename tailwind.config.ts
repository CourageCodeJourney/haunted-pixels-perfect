import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'creepster': ['Creepster', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-up": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "ghost-float": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) rotate(-5deg)",
            opacity: "0.7"
          },
          "25%": {
            transform: "translateY(-30px) translateX(20px) rotate(5deg)",
            opacity: "0.9"
          },
          "50%": {
            transform: "translateY(-50px) translateX(-10px) rotate(-3deg)",
            opacity: "0.6"
          },
          "75%": {
            transform: "translateY(-20px) translateX(15px) rotate(7deg)",
            opacity: "0.8"
          }
        },
        "spooky-blink": {
          "0%, 90%, 100%": {
            opacity: "1",
            transform: "scaleY(1)"
          },
          "95%": {
            opacity: "0",
            transform: "scaleY(0.1)"
          }
        },
        "blink": {
          "0%, 95%, 100%": {
            transform: "scaleY(1)"
          },
          "97.5%": {
            transform: "scaleY(0.1)"
          }
        },
        "blood-drip": {
          "0%": {
            transform: "translateY(-100%) scaleY(0)",
            opacity: "0"
          },
          "10%": {
            opacity: "0.8"
          },
          "100%": {
            transform: "translateY(100vh) scaleY(1)",
            opacity: "0"
          }
        },
        "creep-in": {
          "0%": {
            transform: "translateY(0)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(var(--final-y, 100vh))",
            opacity: "1"
          }
        },
        "skitter": {
          "0%, 100%": {
            transform: "translateX(0) rotate(0deg)"
          },
          "25%": {
            transform: "translateX(10px) rotate(5deg)"
          },
          "75%": {
            transform: "translateX(-10px) rotate(-5deg)"
          }
        },
        "bat-fly": {
          "0%": {
            transform: "translateX(0) translateY(0)"
          },
          "100%": {
            transform: "translateX(120vw) translateY(50px)"
          }
        },
        "wing-flap": {
          "0%, 100%": {
            transform: "scaleX(1)"
          },
          "50%": {
            transform: "scaleX(0.7)"
          }
        },
        "shadow-peek-left": {
          "0%, 100%": {
            transform: "translateX(-100%)"
          },
          "50%": {
            transform: "translateX(50px)"
          }
        },
        "shadow-peek-right": {
          "0%, 100%": {
            transform: "translateX(100%)"
          },
          "50%": {
            transform: "translateX(-50px)"
          }
        },
        "glitch-1": {
          "0%, 100%": {
            transform: "translateX(0)"
          },
          "25%": {
            transform: "translateX(-5px)"
          },
          "75%": {
            transform: "translateX(5px)"
          }
        },
        "glitch-2": {
          "0%, 100%": {
            transform: "translateX(0)"
          },
          "33%": {
            transform: "translateX(3px)"
          },
          "66%": {
            transform: "translateX(-3px)"
          }
        },
        "glitch-3": {
          "0%, 100%": {
            transform: "translateX(0)"
          },
          "20%": {
            transform: "translateX(-2px)"
          },
          "80%": {
            transform: "translateX(2px)"
          }
        },
        "screen-shake": {
          "0%, 100%": {
            transform: "translate(0, 0)"
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translate(-2px, 2px)"
          },
          "20%, 40%, 60%, 80%": {
            transform: "translate(2px, -2px)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "scale-up": "scale-up 0.8s ease-out",
        "flicker": "flicker 3s ease-in-out infinite",
        "ghost-float": "ghost-float 20s ease-in-out infinite",
        "spooky-blink": "spooky-blink 4s ease-in-out infinite",
        "blink": "blink 3s ease-in-out infinite",
        "blood-drip": "blood-drip 5s ease-in infinite",
        "creep-in": "creep-in 15s linear infinite",
        "skitter": "skitter 2s ease-in-out infinite",
        "bat-fly": "bat-fly 5s linear infinite",
        "wing-flap": "wing-flap 0.3s ease-in-out infinite",
        "shadow-peek-left": "shadow-peek-left 3s ease-in-out infinite",
        "shadow-peek-right": "shadow-peek-right 3s ease-in-out infinite",
        "glitch-1": "glitch-1 0.2s ease-in-out infinite",
        "glitch-2": "glitch-2 0.3s ease-in-out infinite",
        "glitch-3": "glitch-3 0.25s ease-in-out infinite",
        "screen-shake": "screen-shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
