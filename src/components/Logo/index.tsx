import { PropsLogo } from "@/utils/types";

export default function Logo({ size, onClick }: PropsLogo) {
  return (
    <h1
      onClick={onClick}
      className={`${
        size ? size : "text-4xl"
      } font-letric cursor-pointer hover:opacity-80`}
    >
      JG
    </h1>
  );
}
