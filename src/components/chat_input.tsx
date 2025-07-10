export default function ChatInput() {
  return (
    <label className="flex flex-col min-w-40 h-12 flex-1">
      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
        <input
          placeholder="Type a message..."
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#2b3630] focus:border-none h-full placeholder:text-[#a1b5ab] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
          value=""
        />
        <div className="flex border-none bg-[#2b3630] items-center justify-center pr-4 rounded-r-xl border-l-0 !pr-2">
          <div className="flex items-center gap-4 justify-end">
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center p-1.5">
                <div
                  className="text-[#a1b5ab]"
                  data-icon="Image"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#d2f3e2] text-[#121714] text-sm font-medium leading-normal ">
              <span className="truncate">Add</span>
            </button>
          </div>
        </div>
      </div>
    </label>
  );
}
