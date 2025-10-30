import { useEffect, useState } from "react";
import ForwardedIconComponent from "@/components/common/genericIconComponent";
import { Button } from "@/components/ui/button";
import useTheme from "@/customization/hooks/use-custom-theme";

export const ThemeButtons = () => {
  const { systemTheme, dark, setThemePreference } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(
    systemTheme ? "system" : dark ? "dark" : "light",
  );
  const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

  useEffect(() => {
    if (!hasInteracted) {
      // Set initial theme without triggering the animation
      if (systemTheme) {
        setSelectedTheme("system");
      } else if (dark) {
        setSelectedTheme("dark");
      } else {
        setSelectedTheme("light");
      }
    }
  }, [systemTheme, dark, hasInteracted]);

  const handleThemeChange = (theme: string) => {
    setHasInteracted(true); // Mark that a button has been clicked
    setSelectedTheme(theme);
    setThemePreference(theme);
  };

  return (
    <div className="relative ml-auto inline-flex rounded-full border border-border">
      {/* Sliding Indicator - Enhanced with orange theme */}
      <div
        className={`absolute bottom-0.5 left-[1px] top-0.5 w-[30%] rounded-full ${
          hasInteracted ? "transition-all duration-300" : ""
        } ${
          selectedTheme === "light"
            ? "bg-primary" // Orange for light theme
            : selectedTheme === "dark"
              ? "bg-primary" // Orange for dark theme
              : "bg-primary" // Orange for system theme
        }`}
        style={{
          transform: `translateX(${
            selectedTheme === "light"
              ? "2%"
              : selectedTheme === "dark"
                ? "112%"
                : "223%"
          })`,
          zIndex: 0, // Ensure it's behind the buttons
        }}
      ></div>

      {/* Light Theme Button */}
      <Button
        unstyled
        className={`relative z-10 inline-flex items-center rounded-full px-1 ${
          selectedTheme === "light"
            ? "text-primary-foreground" // White text on orange background
            : "text-foreground hover:bg-primary/20 hover:text-primary"
        }`}
        onClick={() => handleThemeChange("light")}
        data-testid="menu_light_button"
        id="menu_light_button"
      >
        <ForwardedIconComponent strokeWidth={2} name="Sun" className="w-4" />
      </Button>

      {/* Dark Theme Button */}
      <Button
        unstyled
        className={`relative z-10 mx-1 inline-flex items-center rounded-full px-1 ${
          selectedTheme === "dark"
            ? "text-primary-foreground" // White text on orange background
            : "text-foreground hover:bg-primary/20 hover:text-primary"
        }`}
        onClick={() => handleThemeChange("dark")}
        data-testid="menu_dark_button"
        id="menu_dark_button"
      >
        <ForwardedIconComponent strokeWidth={2} name="Moon" className="w-4" />
      </Button>

      {/* System Theme Button */}
      <Button
        unstyled
        className={`relative z-10 inline-flex items-center rounded-full px-1 ${
          selectedTheme === "system"
            ? "text-primary-foreground" // White text on orange background
            : "text-foreground hover:bg-primary/20 hover:text-primary"
        }`}
        onClick={() => handleThemeChange("system")}
        data-testid="menu_system_button"
        id="menu_system_button"
      >
        <ForwardedIconComponent
          name="Monitor"
          className="w-4"
          strokeWidth={2}
        />
      </Button>
    </div>
  );
};

export default ThemeButtons;
