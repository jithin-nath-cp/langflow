import React from "react";
import { cn } from "../../utils/utils";

/**
 * Typography Components from Comprehensive Styling Guide
 *
 * Provides consistent text hierarchy and styling patterns
 * with Poppins font family and orange primary theme integration
 */

// Title Component
interface TitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  level = 3,
}) => {
  const baseClasses = "text-primary font-semibold font-poppins";

  const levelClasses = {
    1: "text-4xl mb-8",
    2: "text-3xl mb-7",
    3: "text-2xl mb-6", // Default from styling guide
    4: "text-xl mb-5",
    5: "text-lg mb-4",
    6: "text-base mb-3",
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(baseClasses, levelClasses[level], className)}>
      {children}
    </Component>
  );
};

// Body Text Component
interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export const BodyText: React.FC<BodyTextProps> = ({
  children,
  className,
  size = "xs",
  weight = "normal",
}) => {
  const baseClasses = "text-gray-900 font-poppins";

  const sizeClasses = {
    xs: "text-xs", // 12px - Most common size from guide
    sm: "text-sm", // 14px - Secondary content
    base: "text-base", // 16px - Body text
    lg: "text-lg", // 18px - Subheadings
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <span
      className={cn(
        baseClasses,
        sizeClasses[size],
        weightClasses[weight],
        className,
      )}
    >
      {children}
    </span>
  );
};

// Body Text Bold Component
export const BodyTextBold: React.FC<BodyTextProps> = ({
  children,
  className,
  size = "xs",
}) => {
  return (
    <BodyText weight="semibold" size={size} className={className}>
      {children}
    </BodyText>
  );
};

// Supporting Text Component
interface SupportingTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "base";
}

export const SupportingText: React.FC<SupportingTextProps> = ({
  children,
  className,
  size = "xs",
}) => {
  const baseClasses = "text-gray-600 font-poppins";

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
  };

  return (
    <span className={cn(baseClasses, sizeClasses[size], className)}>
      {children}
    </span>
  );
};

// Portal Title Component
interface PortalTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PortalTitle: React.FC<PortalTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "text-secondary text-xs font-semibold uppercase font-poppins tracking-wide",
        className,
      )}
    >
      {children}
    </div>
  );
};

// Page Title Component (enhanced from guide)
interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        "text-primary text-2xl font-semibold font-poppins mb-6",
        className,
      )}
    >
      {children}
    </h1>
  );
};

// Section Title Component
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        "text-secondary text-xs font-medium font-poppins",
        className,
      )}
    >
      {children}
    </h2>
  );
};

// Link Text Component
interface LinkTextProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const LinkText: React.FC<LinkTextProps> = ({
  children,
  className,
  href,
  onClick,
}) => {
  const baseClasses =
    "text-primary hover:text-primary-hover cursor-pointer transition-colors duration-200 font-poppins";

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, className)} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <span className={cn(baseClasses, className)} onClick={onClick}>
      {children}
    </span>
  );
};

// Text hierarchy utilities
export const textStyles = {
  // Primary text styles
  primary: "text-primary",
  primaryDark: "text-primary-hover",
  primaryActive: "text-primary-700",

  // Secondary text styles
  secondary: "text-secondary",
  secondaryDark: "text-secondary-hover",

  // Standard text hierarchy
  xs: "text-xs", // 12px - Most common size
  sm: "text-sm", // 14px - Secondary content
  base: "text-base", // 16px - Body text
  lg: "text-lg", // 18px - Subheadings
  xl: "text-xl", // 20px - Headings
  "2xl": "text-2xl", // 24px - Page titles

  // Font weights
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",

  // Font family
  poppins: "font-poppins",
};

/**
 * Usage Examples:
 *
 * // Page Title
 * <PageTitle>Dashboard Overview</PageTitle>
 *
 * // Section Title
 * <SectionTitle>User Settings</SectionTitle>
 *
 * // Body Text
 * <BodyText size="sm" weight="medium">
 *   This is medium body text
 * </BodyText>
 *
 * // Supporting Text
 * <SupportingText>
 *   Additional context information
 * </SupportingText>
 *
 * // Portal Title
 * <PortalTitle>Navigation</PortalTitle>
 *
 * // Link Text
 * <LinkText href="/settings">
 *   Go to Settings
 * </LinkText>
 */
