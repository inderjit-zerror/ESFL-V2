"use client";

import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-xs  uppercase ${className}`}
    >
      {children}
    </label>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-md border-black/5 bg-[#ffffff] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B] transition-colors duration-300 ${className}`}
    />
  );
}

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-md  resize-none border border-black/5 bg-[#ffffff] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B] transition-colors duration-300 ${className}`}
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
        } bg-[#ffffff] px-4 py-3 cursor-pointer text-sm outline-none transition-colors duration-300 ${textColor} ${className}`}
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

export function DragDrop({ className = "", onFileChange, file, ...props }) {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (onFileChange) onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      if (onFileChange) onFileChange(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div 
      className={`w-full relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md transition-colors duration-300 cursor-pointer ${dragActive ? "border-[#C4321B] bg-[#C4321B]/5" : "border-black/5 bg-[#ffffff] hover:bg-gray-50"} ${className}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        {...props}
      />
      {file ? (
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-[#2b2b2b]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#C4321B] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <p className="font-medium truncate max-w-[200px] sm:max-w-[300px]">{file.name}</p>
          <p className="text-xs text-[#a9a9a9]">Click or drag to replace</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2 text-sm text-[#a9a9a9] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          <p><span className="font-medium text-[#C4321B]">Click to upload</span> or drag and drop</p>
          <p className="text-xs">Attach any relevant files</p>
        </div>
      )}
    </div>
  );
}

