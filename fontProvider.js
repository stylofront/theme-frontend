import { outfit, spaceGrotesk } from "./font";

/**
 * Provides font styles for the application.
 * It takes a single child and wraps it in a div element
 * with the necessary CSS classes.
 * @param {{React.ReactNode}} children - The child component to be wrapped
 * @returns {{React.ReactElement}} - The wrapped component with font styles applied
 */
export function FontProvider({ children }) {
  return (
    <div className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      {children}
    </div>
  );
}
