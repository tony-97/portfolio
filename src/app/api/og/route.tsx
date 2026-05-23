import Icon from "@/components/icon";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(<Icon fontSize={"32rem"}></Icon>, {
    width: 1200,
    height: 630,
  });
}
