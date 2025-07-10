import { CustomSelectBox, CustomSearchBox } from "@/components/index";

interface SelectBoxConfig {
  options: { label: string; value: string }[];
  selectedOption: string;
  onChange: (value: string) => void;
}

interface CustomHeaderFilterProps {
  title?: string;
  add_title?: string;
  onAdd?: () => void;
  selectBoxes?: SelectBoxConfig[];
  is_filter?: boolean;
  is_search?: boolean;
  is_add?: boolean;
  search_name?: string;
  onChange?: (value: any) => void;
  exportData?: (value: any) => void;
}

export default function CustomHeaderFilter({
  title = "Leads",
  add_title = "Add Lead",
  onAdd = () => {},
  selectBoxes = [],
  is_filter = true,
  is_search = true,
  is_add = true,
  search_name = "",
  onChange = () => {},
  exportData = () => {},
}: CustomHeaderFilterProps) {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
          {title}
        </p>
        {is_add && (
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal"
            onClick={onAdd}
          >
            <span className="truncate">{add_title}</span>
          </button>
        )}
      </div>
      {is_search && (
        <CustomSearchBox
          title={title}
          search_name={search_name}
          onChange={(value: any) => onChange(value.target.value)}
        />
      )}
      {is_filter && (
        <div className="flex gap-3 p-3 flex-wrap pr-4 justify-between">
          <div className="flex gap-3  flex-wrap pr-4">
            {selectBoxes.map((config, idx) => (
              <CustomSelectBox
                key={idx}
                options={config.options}
                selectedOption={config.selectedOption}
                onChange={config.onChange}
              />
            ))}
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
              <button
                className="pr-5 text-white cursor-pointer"
                onClick={() => exportData("excel")}
              >
                <div
                  className="text-white"
                  data-icon="FileXls"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M156,208a8,8,0,0,1-8,8H120a8,8,0,0,1-8-8V152a8,8,0,0,1,16,0v48h20A8,8,0,0,1,156,208ZM92.65,145.49a8,8,0,0,0-11.16,1.86L68,166.24,54.51,147.35a8,8,0,1,0-13,9.3L58.17,180,41.49,203.35a8,8,0,0,0,13,9.3L68,193.76l13.49,18.89a8,8,0,0,0,13-9.3L77.83,180l16.68-23.35A8,8,0,0,0,92.65,145.49Zm98.94,25.82c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.72,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.33-2.15,3.93-4.6,3.06-15.16,1.55-19.54.35A8,8,0,0,0,173.93,214a60.63,60.63,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z"></path>
                  </svg>
                </div>
              </button>
              <button
                className=" text-white cursor-pointer"
                onClick={() => exportData("pdf")}
              >
                <div
                  className="text-white"
                  data-icon="FilePdf"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
