"use client";

import React, { useRef, useState } from "react";
import { Combobox } from "@headlessui/react";
import clsx from "clsx";
import { useVirtualizer } from "@tanstack/react-virtual";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import SpinnerIcon from "fintech/app/(shared)/icons/SpinnerIcon";

type SelectProps = {
  label: string;
  items: string[];
  onChange: (value: string) => void;
  value: string | undefined;
  className?: string;
  updating?: boolean;
  required?: boolean;
  placeholder?: string;
};

const Select = ({
  label,
  items,
  value,
  onChange,
  className,
  updating = false,
  required = false,
  placeholder = "",
}: SelectProps) => {
  const [query, setQuery] = useState("");
  const filteredItems =
    query === ""
      ? items
      : items.filter((name) => {
          return name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={value ?? ""}
      onChange={onChange}
      className={className}
      disabled={updating}
    >
      <div className="text-sm px-1.5 mt-1">
        {label}
        {required && <span className="text-red-500 pl-0.5">*</span>}
      </div>
      <div className="relative w-full text-sm mt-1">
        <Combobox.Input
          className={clsx(
            "w-full px-4 py-2 rounded-3xl bg-white border hover:bg-neutral-50",
            {
              "opacity-50": updating,
            }
          )}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronDownIcon />
        </Combobox.Button>

        <Combobox.Options>
          {filteredItems?.length === 0 && query !== "" ? (
            <div className="absolute text-sm right-7 top-1/2 -translate-y-1/2 text-black">
              Nothing found
            </div>
          ) : (
            <VirtualizedList items={filteredItems ?? []} />
          )}
        </Combobox.Options>
        {updating && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <SpinnerIcon />
          </div>
        )}
      </div>
    </Combobox>
  );
};

function VirtualizedList({ items }: { items: string[] }) {
  const parentRef = useRef(null);

  const rowVirtual = useVirtualizer({
    count: items?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 37,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-sm shadow-lg focus:outline-none"
    >
      <div
        style={{
          height: `${rowVirtual.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtual.getVirtualItems().map((virtualRow: any) => (
          <Combobox.Option
            key={virtualRow.index}
            value={items?.[virtualRow.index]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
            className={({ active }) =>
              clsx(
                "relative cursor-pointer select-none py-2 px-4",
                active ? "bg-neutral-100" : "bg-white"
              )
            }
          >
            {({ active, selected }) => (
              <>
                <span
                  className={clsx(
                    "block truncate",
                    selected && "font-semibold"
                  )}
                >
                  {items?.[virtualRow.index]}
                </span>

                {selected && (
                  <span
                    className={clsx(
                      "absolute inset-y-0 left-0 flex items-center",
                      active ? "bg-neutral-50" : "bg-white"
                    )}
                  />
                )}
              </>
            )}
          </Combobox.Option>
        ))}
      </div>
    </div>
  );
}

export default Select;
