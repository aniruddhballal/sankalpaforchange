import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#E8722A',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z"
            fill="white"
            opacity="0.95"
          />
          <path
            d="M10 6C10 6 7 8.5 7 11C7 12.657 8.343 14 10 14C11.657 14 13 12.657 13 11C13 8.5 10 6 10 6Z"
            fill="white"
            opacity="0.4"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}