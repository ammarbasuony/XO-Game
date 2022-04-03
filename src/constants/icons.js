export const darkModeIcon = (lightModeClass, darkModeClass) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
        fill="currentColor"
        className={`${lightModeClass} ${darkModeClass}`}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
        fill="currentColor"
        className={`${lightModeClass} ${darkModeClass}`}
      />
    </svg>
  );
};

export const XIcon = (lightModeClass, darkModeClass) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 460.775 460.775"
    >
      <path
        className={`${lightModeClass} ${darkModeClass}`}
        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
      />
    </svg>
  );
};

export const OIcon = (lightModeClass, darkModeClass) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 29.334 29.334"
    >
      <g>
        <path
          className={`${lightModeClass} ${darkModeClass}`}
          d="M14.666,0C6.578,0,0,6.58,0,14.668c0,8.087,6.578,14.666,14.666,14.666s14.668-6.579,14.668-14.666
		C29.334,6.58,22.754,0,14.666,0z M14.666,25.334C8.784,25.334,4,20.549,4,14.668C4,8.785,8.784,4,14.666,4
		c5.883,0,10.668,4.785,10.668,10.668C25.334,20.549,20.547,25.334,14.666,25.334z"
        />
      </g>
    </svg>
  );
};
