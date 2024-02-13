import clsx from "clsx";

export type ArrowIconProps = {
  direction?: "left" | "right";
};

export default function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx({ "-scale-x-100": direction === "left" })}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.89886 5.60107C5.56692 5.26912 5.56692 4.73093 5.89886 4.39898C6.23081 4.06704 6.769 4.06704 7.10094 4.39898L10.1009 7.39898C10.4329 7.73093 10.4329 8.26912 10.1009 8.60107L7.10094 11.6011C6.769 11.933 6.23081 11.933 5.89886 11.6011C5.56692 11.2691 5.56692 10.7309 5.89886 10.399L8.2969 8.00002L5.89886 5.60107Z"
        fill="#9DA0AF"
      />
    </svg>
  );
}
