import { defaultIconClassName, defaultIconStrokeWidth } from "@/constant/default";

export default function IconPlus({ className = defaultIconClassName, strokeWidth = defaultIconStrokeWidth }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );
}
