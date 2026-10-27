type Props = { tone?: "green" | "blue" | "sand"; variant?: "saloon" | "suv" | "hatch" };

export default function CarArt({ tone = "green", variant = "saloon" }: Props) {
  const body = variant === "suv"
    ? "M55 126 L72 88 Q79 75 100 74 L178 74 Q197 77 211 98 L235 108 L254 126 L254 151 L45 151 L45 132 Z"
    : variant === "hatch"
    ? "M57 123 L79 91 Q89 76 112 77 L169 77 Q190 79 205 104 L236 116 L249 133 L249 151 L46 151 L46 132 Z"
    : "M49 126 L76 104 Q89 83 115 82 L174 82 Q195 83 216 108 L243 118 L254 134 L254 151 L43 151 L43 133 Z";
  const color = tone === "blue" ? "#3d596d" : tone === "sand" ? "#7d786c" : "#354d3c";
  return (
    <svg viewBox="0 0 300 190" role="img" aria-label="Illustration of a car" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="150" cy="158" rx="112" ry="12" fill="#1b2b21" opacity=".12" />
      <path d={body} fill={color} />
      <path d="M88 103 L109 86 Q114 83 126 83 L145 83 L145 104 Z" fill="#b9d1d4" />
      <path d="M152 83 L173 84 Q191 86 207 105 L152 104 Z" fill="#b9d1d4" />
      <path d="M45 132 Q150 143 253 132 L253 151 L43 151 L43 134 Z" fill={color} />
      <path d="M57 123 L75 120 L74 130 L51 132 Z" fill="#f7e4a2" />
      <path d="M229 122 L245 126 L249 133 L228 132 Z" fill="#e78a79" />
      <path d="M80 140 L219 140" stroke="#9fb09e" strokeWidth="2" opacity=".5" />
      <circle cx="83" cy="148" r="20" fill="#1c2520" />
      <circle cx="83" cy="148" r="10" fill="#bdc8bf" />
      <circle cx="83" cy="148" r="4" fill="#6b796f" />
      <circle cx="213" cy="148" r="20" fill="#1c2520" />
      <circle cx="213" cy="148" r="10" fill="#bdc8bf" />
      <circle cx="213" cy="148" r="4" fill="#6b796f" />
      <path d="M113 114 L180 114" stroke="#ffffff" strokeWidth="2" opacity=".18" />
    </svg>
  );
}
