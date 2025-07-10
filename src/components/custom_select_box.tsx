export default function CustomSelectBox({
  options,
  selectedOption,
  onChange,
}: {
  options: { value: string; label: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
}) {
  return (
    <select
      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#283930] pl-4 pr-8 text-white text-sm font-medium leading-normal appearance-none cursor-pointer"
      style={{
        backgroundImage:
          'url(\'data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>\')',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.75rem center",
        backgroundSize: "20px 20px",
        width: 150,
      }}
      value={selectedOption}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
