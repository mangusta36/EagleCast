import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#0B5CFF",
        borderRadius: "34px",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <svg width="126" height="126" viewBox="0 0 64 64" fill="none">
        <path
          fill="#FFFFFF"
          d="M16 19c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v19c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V19Zm7 4v11h9v-4h-5v-2h12v-5H23Zm14 6.5 9 5.2-9 5.2V29.5Z"
        />
        <path fill="#061826" d="M24 48h16v4H24z" />
      </svg>
    </div>,
    size,
  );
}
