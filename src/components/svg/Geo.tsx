export default function Geo(props: object){
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={20}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M8 0C3.8 0 0 3.273 0 8.334c0 3.232 2.45 7.034 7.34 11.414.38.336.95.336 1.33 0C13.55 15.368 16 11.566 16 8.334 16 3.273 12.2 0 8 0zm0 10.164c-1.1 0-2-.915-2-2.033 0-1.118.9-2.033 2-2.033s2 .915 2 2.033c0 1.118-.9 2.033-2 2.033z"
      />
    </svg>
    )
}