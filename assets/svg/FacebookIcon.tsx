import React from "react";

const FacebookIcon:React.FC<{className: string}> = ({ className }) => {
  return (
    <div>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 512.6 512.6"
        height="512"
        viewBox="0 0 512.6 512.6"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        fill="#9a9ea6"
      >
        <g>
          <path d="m457.21 0h-401.82c-30.59 0-55.39 24.8-55.39 55.39v401.82c0 30.59 24.8 55.39 55.39 55.39h401.82c30.59 0 55.39-24.8 55.39-55.39v-401.82c0-30.59-24.8-55.39-55.39-55.39zm-170.88 450.61v-137.66h45.91l8.73-56.95h-54.64v-36.95c0-15.58 7.63-30.77 32.11-30.77h24.84v-48.48s-22.55-3.85-44.1-3.85c-45 0-74.41 27.28-74.41 76.65v43.4h-50.02v56.95h50.02v137.66c-94.18-14.78-166.22-96.28-166.22-194.61 0-108.8 88.2-197 197-197s197 88.2 197 197c0 98.33-72.04 179.83-166.22 194.61z" />
        </g>
      </svg>
    </div>
  );
};

export default FacebookIcon;
