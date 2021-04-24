export default function Icon({ name, size, className }) {
  switch (name) {
    case "Behance":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-behance"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
          <line x1="3" y1="12" x2="7.5" y2="12" />
          <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
          <line x1="16" y1="6" x2="19" y2="6" />
        </svg>
      );
    case "Twitter":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-twitter"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-instagram"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      );
    case "Dribbble":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-dribbble"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
          <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
          <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-linkedin"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8.01" />
          <line x1="12" y1="16" x2="12" y2="11" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      );
  }
}
