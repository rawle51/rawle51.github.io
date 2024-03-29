import { FC, SVGProps } from 'react';

export const SupportFeatureIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="current"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="9.68" cy="9.68" r="9.68" fill="current" />
    <path
      d="M20.5601 9.68C20.5601 4.33389 24.8939 0 30.2401 0C35.5862 0 39.9201 4.33389 39.9201 9.68C39.9201 15.0261 35.5862 19.36 30.2401 19.36H20.5601V9.68Z"
      fill="current"
    />
    <path
      d="M0 30.2401C0 24.8939 4.33388 20.5601 9.68 20.5601H19.36V30.2401C19.36 35.5862 15.0261 39.9201 9.68 39.9201C4.33389 39.9201 0 35.5862 0 30.2401Z"
      fill="current"
    />
    <circle cx="30.2401" cy="30.2401" r="9.68" fill="current" />
  </svg>
);
