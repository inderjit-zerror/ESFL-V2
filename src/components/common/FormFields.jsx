"use client";

import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-xs opacity-50 uppercase ${className}`}
    >
      {children}
    </label>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-md border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B] transition-colors duration-300 ${className}`}
    />
  );
}

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-md h-32 resize-none border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B] transition-colors duration-300 ${className}`}
    />
  );
}

export function Select({ className = "", children, label, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Extract options from children robustly
  const options = React.Children.toArray(children)
    .map((child) => {
      if (React.isValidElement(child) && child.type === "option") {
        return {
          value: child.props.value,
          label: child.props.children,
          disabled: child.props.disabled,
        };
      }
      return null;
    })
    .filter(Boolean);

  const handleSelect = (optionValue) => {
    setIsOpen(false);
    if (props.onChange) {
      // Mock the native event object so existing handlers work seamlessly
      props.onChange({ target: { value: optionValue } });
    }
  };

  const isPlaceholder = props.value === "" || props.value === undefined;
  const textColor = isPlaceholder ? "text-[#a9a9a9]" : "text-[#2b2b2b]";

  // Find the selected option to display its label
  const selectedOption = options.find((opt) => opt.value === props.value);
  const displayText = selectedOption ? selectedOption.label : `Select ${label || ""}`;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Hidden native select ensures forms still serialize properly if needed */}
      <select {...props} className="hidden">
        {label && <option value="" disabled hidden>Select {label}</option>}
        {children}
      </select>

      {/* Custom Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-md relative flex items-center justify-between border ${
          isOpen ? "border-[#C4321B]" : "border-black/5"
        } bg-[#FCF8F2] px-4 py-3 cursor-pointer text-sm outline-none transition-colors duration-300 ${textColor} ${className}`}
      >
        <span className="truncate">{displayText}</span>
        <RiArrowDownSLine
          className={`w-5 h-5 shrink-0 text-gray-500 transition-transform duration-300 ${
            isOpen ? "-rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute z-50 w-full  bg-white border border-black/5 rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul data-lenis-prevent className="max-h-60 overflow-y-auto py-1">
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => !opt.disabled && handleSelect(opt.value)}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                opt.disabled
                  ? "opacity-50 cursor-not-allowed text-[#a9a9a9]"
                  : "text-[#2b2b2b] hover:bg-[#FCF8F2] hover:text-[#C4321B]"
              } ${
                props.value === opt.value
                  ? "bg-[#FCF8F2] font-medium text-[#C4321B]"
                  : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
