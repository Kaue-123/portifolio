import { ImageResponse } from "next/og";
import { content } from "@/content/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${content.name} — ${content.role}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #121214 0%, #1a1626 55%, #2a1b4d 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8d8d99",
          }}
        >
          {content.role}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: "#e1e1e6",
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          {content.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#996dff",
            marginTop: 12,
          }}
        >
          Node.js · TypeScript · NestJS
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          {content.stack.map((tech: string) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#c4c4cc",
                border: "1px solid #29292e",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            width: 220,
            height: 6,
            marginTop: 56,
            borderRadius: 999,
            background: "linear-gradient(90deg, #8257e5, #996dff)",
          }}
        />
      </div>
    ),
    size
  );
}
