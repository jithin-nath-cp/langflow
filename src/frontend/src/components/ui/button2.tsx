import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/utils";
import ForwardedIconComponent from "../common/genericIconComponent";

/**
 * Button2 Component - Enhanced button system from Comprehensive Styling Guide
 *
 * Features new variant system with:
 * - filled: Primary filled button with orange background
 * - outlined: Border button with transparent background
 * - text: Text-only button without background
 * - elevated: Button with shadow elevation
 * - tonal: Subtle background button
 * - icon: Icon-only button
 *
 * Maintains backward compatibility while providing modern styling patterns
 */

const button2Variants = cva(
  // Base styles for all buttons - enhanced from styling guide
  "nopan nodelete nodrag inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Filled variant - Primary orange background
        filled:
          "bg-primary text-primary-foreground shadow-md hover:bg-primary-hover active:scale-95 transition-all duration-200",

        // Outlined variant - Border with transparent background
        outlined:
          "border border-primary/30 text-primary hover:bg-primary/10 active:bg-primary/20 transition-all duration-200",

        // Text variant - No background, text only
        text: "text-primary hover:bg-primary/10 active:bg-primary/20 transition-all duration-200",

        // Elevated variant - With shadow
        elevated:
          "bg-background text-secondary-foreground shadow-lg hover:shadow-xl hover:bg-muted transition-all duration-200",

        // Tonal variant - Subtle background
        tonal:
          "bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30 transition-all duration-200",

        // Icon variant - For icon-only buttons
        icon: "text-primary hover:bg-primary/10 active:bg-primary/20 rounded-full transition-all duration-200",

        // Legacy variants for backward compatibility
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-input hover:text-accent-foreground",
        secondary:
          "border border-muted bg-muted text-secondary-foreground hover:bg-secondary-foreground/5",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground disabled:!bg-transparent",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        // Enhanced size system from styling guide
        sm: "h-9 px-6 py-2.5 text-sm font-medium", // Small button
        md: "h-10 px-6 py-2.5 text-sm font-medium", // Medium button (default)
        lg: "h-11 px-8 py-3 text-base font-medium", // Large button

        // Icon-specific sizes
        iconSm: "h-8 w-8 p-1.5",
        iconMd: "h-10 w-10 p-2.5",
        iconLg: "h-12 w-12 p-3",

        // Legacy sizes for compatibility
        default: "h-10 py-2 px-4",
        xs: "py-0.5 px-3 rounded-md",
        icon: "p-1 rounded-md",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

export interface Button2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button2Variants> {
  asChild?: boolean;
  loading?: boolean;
  unstyled?: boolean;
  ignoreTitleCase?: boolean;
}

function toTitleCase(text: string) {
  return text
    ?.split(" ")
    ?.map(
      (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase(),
    )
    ?.join(" ");
}

const Button2 = React.forwardRef<HTMLButtonElement, Button2Props>(
  (
    {
      className,
      variant,
      unstyled,
      size,
      loading,
      type,
      disabled,
      asChild = false,
      children,
      ignoreTitleCase = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    let newChildren = children;

    // Apply title case transformation unless explicitly disabled
    if (typeof children === "string" && !ignoreTitleCase) {
      newChildren = toTitleCase(children);
    }

    return (
      <Comp
        className={
          !unstyled
            ? button2Variants({ variant, size, className })
            : cn(className)
        }
        disabled={loading || disabled}
        {...(asChild ? {} : { type: type || "button" })}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="relative flex items-center justify-center">
            <span
              className={cn(
                "invisible flex items-center justify-center gap-2 !p-0",
              )}
            >
              {newChildren}
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <ForwardedIconComponent
                name="Loader2"
                className="h-4 w-4 animate-spin"
              />
            </span>
          </span>
        ) : (
          newChildren
        )}
      </Comp>
    );
  },
);

Button2.displayName = "Button2";

export { Button2, button2Variants };

/**
 * Usage Examples:
 *
 * // Primary Filled Button
 * <Button2 variant="filled" size="sm">
 *   <span>Submit</span>
 * </Button2>
 *
 * // Outlined Button
 * <Button2 variant="outlined" size="sm">
 *   <span>Cancel</span>
 * </Button2>
 *
 * // Text Button (no background)
 * <Button2 variant="text" size="sm">
 *   <span>Link Action</span>
 * </Button2>
 *
 * // Elevated Button (with shadow)
 * <Button2 variant="elevated" size="sm">
 *   <span>Elevated</span>
 * </Button2>
 *
 * // Tonal Button (subtle background)
 * <Button2 variant="tonal" size="sm">
 *   <span>Tonal</span>
 * </Button2>
 *
 * // Icon Button
 * <Button2 variant="icon" size="iconMd">
 *   <span className="material-icons">add</span>
 * </Button2>
 */
