import errorSpan from "./error-span.module.css";
export const ErrorSpan = ({ children }) => {
  return <span className={errorSpan.errorSpan}>{children}</span>;
};
