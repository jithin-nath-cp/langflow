import { Outlet } from "react-router-dom";
import AppHeader from "@/components/core/appHeaderComponent";
import useTheme from "@/customization/hooks/use-custom-theme";

export function DashboardWrapperPage() {
  useTheme();

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background font-poppins">
      {/* Enhanced header with consistent styling */}
      <AppHeader />

      {/* Main container with enhanced styling patterns from comprehensive guide */}
      <div className="flex w-full flex-1 flex-row overflow-hidden">
        {/* Main content area with container patterns */}
        <div className="flex w-full flex-1 flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
