// components/cn.js
export default function Cn(...classNames) {
  return classNames.filter(Boolean).join(" ");
}
