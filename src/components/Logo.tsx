import { SVGAttributes } from 'react'

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={132}
      height={150}
      viewBox="0 0 132 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_50)" fill="#81D8F7">
        <path d="M131.64 75.013c0-8.72-10.921-16.985-27.664-22.11 3.864-17.065 2.146-30.642-5.42-34.989-1.745-1.02-3.784-1.503-6.01-1.503v5.984c1.233 0 2.226.242 3.058.698 3.65 2.093 5.232 10.062 3.998 20.312-.295 2.522-.778 5.178-1.368 7.889-5.26-1.288-11.002-2.281-17.039-2.925-3.622-4.964-7.379-9.472-11.162-13.416 8.747-8.13 16.958-12.585 22.539-12.585v-5.983c-7.379 0-17.039 5.259-26.806 14.382C56 21.697 46.34 16.492 38.961 16.492v5.983c5.554 0 13.792 4.428 22.539 12.504a126.728 126.728 0 00-11.082 13.39c-6.064.644-11.806 1.637-17.065 2.951a80.971 80.971 0 01-1.396-7.781c-1.26-10.25.296-18.22 3.918-20.339.805-.483 1.851-.698 3.086-.698V16.52c-2.254 0-4.294.483-6.064 1.502-7.54 4.347-9.23 17.898-5.34 34.91C10.867 58.081 0 66.32 0 75.012c0 8.721 10.92 16.985 27.664 22.11-3.864 17.066-2.146 30.643 5.42 34.99 1.744 1.02 3.784 1.503 6.038 1.503 7.379 0 17.038-5.26 26.805-14.383 9.767 9.07 19.427 14.275 26.806 14.275 2.254 0 4.293-.483 6.064-1.502 7.54-4.347 9.23-17.898 5.34-34.91 16.636-5.124 27.503-13.389 27.503-22.083zM96.704 57.116c-.993 3.462-2.227 7.03-3.622 10.599a126.982 126.982 0 00-3.515-6.44c-1.235-2.146-2.55-4.24-3.864-6.279 3.81.564 7.486 1.261 11.001 2.12zm-12.29 28.577c-2.092 3.622-4.239 7.057-6.466 10.25-3.998.349-8.05.536-12.128.536-4.052 0-8.103-.187-12.075-.51-2.227-3.192-4.4-6.6-6.493-10.196a139.755 139.755 0 01-5.581-10.68 139.93 139.93 0 015.554-10.705c2.093-3.623 4.24-7.057 6.467-10.25 3.998-.349 8.05-.537 12.128-.537 4.052 0 8.103.188 12.075.51 2.227 3.193 4.4 6.6 6.493 10.196 2.04 3.515 3.89 7.084 5.581 10.68a150.23 150.23 0 01-5.554 10.706zm8.668-3.489a115.035 115.035 0 013.703 10.68A120.417 120.417 0 0185.73 95.03c1.314-2.066 2.63-4.185 3.864-6.359a152.483 152.483 0 003.488-6.467zm-27.208 28.631c-2.496-2.576-4.991-5.447-7.46-8.587 2.415.108 4.884.188 7.38.188 2.521 0 5.017-.053 7.459-.188a104.653 104.653 0 01-7.38 8.587zM45.91 95.03c-3.81-.563-7.486-1.26-11.001-2.12.993-3.46 2.227-7.03 3.622-10.598 1.1 2.147 2.254 4.293 3.516 6.44a177.596 177.596 0 003.863 6.278zm19.83-55.838c2.495 2.576 4.99 5.447 7.459 8.587a166.148 166.148 0 00-7.379-.188c-2.522 0-5.018.053-7.46.188 2.416-3.14 4.91-6.011 7.38-8.587zM45.884 54.996c-1.315 2.066-2.63 4.186-3.864 6.36a151.535 151.535 0 00-3.489 6.44 115.006 115.006 0 01-3.703-10.68 130.328 130.328 0 0111.055-2.12zM21.6 88.591c-9.499-4.052-15.643-9.365-15.643-13.578 0-4.212 6.144-9.552 15.643-13.577 2.308-.993 4.83-1.878 7.433-2.71 1.53 5.26 3.542 10.733 6.037 16.341-2.469 5.581-4.454 11.028-5.957 16.26-2.656-.831-5.178-1.744-7.513-2.736zm14.436 38.343c-3.65-2.093-5.232-10.062-3.998-20.312.295-2.522.778-5.179 1.368-7.889 5.26 1.288 11.002 2.281 17.039 2.925 3.622 4.964 7.379 9.472 11.162 13.416-8.747 8.13-16.958 12.585-22.539 12.585-1.207-.027-2.227-.269-3.032-.725zm63.647-20.446c1.261 10.25-.296 18.219-3.918 20.339-.805.483-1.851.698-3.086.698-5.554 0-13.792-4.428-22.539-12.504a126.798 126.798 0 0011.082-13.39c6.064-.644 11.806-1.637 17.065-2.951.617 2.71 1.1 5.312 1.396 7.808zm10.33-17.897c-2.308.992-4.83 1.878-7.433 2.71-1.529-5.26-3.541-10.733-6.037-16.341 2.469-5.581 4.454-11.028 5.957-16.26a85.122 85.122 0 017.54 2.736c9.499 4.052 15.643 9.365 15.643 13.577-.027 4.213-6.171 9.553-15.67 13.578z" />
        <path d="M65.793 87.276c6.772 0 12.263-5.49 12.263-12.263 0-6.772-5.49-12.262-12.263-12.262-6.772 0-12.262 5.49-12.262 12.262 0 6.773 5.49 12.263 12.262 12.263z" />
      </g>
      <defs>
        <clipPath id="clip0_1_50">
          <path fill="#fff" d="M0 0H131.64V150H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}