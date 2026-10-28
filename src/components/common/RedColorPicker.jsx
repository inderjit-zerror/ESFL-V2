"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Palette, X, Check } from 'lucide-react';

// Review-only tool for /home-newred & /contact-newred: overrides the --red brand variable live
const PRESETS = [
  { name: 'Maroon', hex: '#942222' },
  { name: 'Deep Wine', hex: '#7A1F2B' },
  { name: 'Brick Red', hex: '#A63A2E' },
  { name: 'Reddish Brown', hex: '#8B3A2B' },
  { name: 'Oxblood', hex: '#5E1A1D' },
];

const STORAGE_KEY = 'esfl-newred-color';
const HEX_RE = /^#[0-9a-fA-F]{6}$/;

// Last choice is remembered so it carries between the home & contact versions
const getSaved = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && HEX_RE.test(saved)) return saved;
  } catch { }
  return PRESETS[0].hex;
};

function RedColorPicker() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(getSaved);
  const [custom, setCustom] = useState(active);
  const [hexInput, setHexInput] = useState(active);

  useEffect(() => {
    document.body.style.setProperty('--red', active);
    return () => document.body.style.removeProperty('--red');
  }, [active]);

  const select = (hex) => {
    const value = hex.toUpperCase();
    setActive(value);
    try { localStorage.setItem(STORAGE_KEY, value); } catch { }
  };

  const pickPreset = (hex) => {
    setCustom(hex);
    setHexInput(hex);
    select(hex);
  };

  const onPickerChange = (e) => {
    setCustom(e.target.value);
    setHexInput(e.target.value.toUpperCase());
  };

  const onHexChange = (e) => {
    let value = e.target.value.trim();
    if (value && !value.startsWith('#')) value = `#${value}`;
    setHexInput(value);
    if (HEX_RE.test(value)) setCustom(value);
  };

  const hexValid = HEX_RE.test(hexInput);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open colour options"
        className="fixed top-24 right-4 z-1001 w-11 h-11 rounded-full bg-white shadow-lg border border-black/10 flex items-center justify-center"
      >
        <span className="w-6 h-6 rounded-full border border-black/10" style={{ backgroundColor: active }} />
      </button>
    );
  }

  return (
    <div className="fixed top-24 right-4 z-1001 w-64 rounded-xl bg-white text-black shadow-xl border border-black/10 p-4 text-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="font-medium flex items-center gap-2"><Palette className="size-4" /> Brand red options</p>
        <button onClick={() => setOpen(false)} aria-label="Close colour options" className="text-black/50 hover:text-black">
          <X className="size-4" />
        </button>
      </div>

      {/* Presets */}
      <div className="flex flex-col gap-1">
        {PRESETS.map((p) => {
          const isActive = active.toUpperCase() === p.hex.toUpperCase();
          return (
            <button
              key={p.hex}
              onClick={() => pickPreset(p.hex)}
              className={`flex items-center gap-3 rounded-md px-2 py-1.5 text-left transition-colors ${isActive ? 'bg-black/5' : 'hover:bg-black/5'}`}
            >
              <span className="w-6 h-6 rounded-full shrink-0 border border-black/10" style={{ backgroundColor: p.hex }} />
              <span className="flex-1">{p.name}</span>
              <span className="text-xs text-black/50 font-mono">{p.hex}</span>
              {isActive && <Check className="size-3.5" />}
            </button>
          );
        })}
      </div>

      {/* Custom colour */}
      <div className="mt-4 pt-3 border-t border-black/10">
        <p className="text-xs text-black/50 mb-2">Custom colour</p>
        <div className="flex items-center gap-2">
          <label className="relative w-9 h-9 shrink-0 rounded-md overflow-hidden border border-black/10 cursor-pointer" style={{ backgroundColor: custom }}>
            <input
              type="color"
              value={custom}
              onChange={onPickerChange}
              aria-label="Pick a custom colour"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
          <input
            type="text"
            value={hexInput}
            onChange={onHexChange}
            maxLength={7}
            spellCheck={false}
            aria-label="Hex code"
            className={`w-full min-w-0 rounded-md border px-2 py-2 font-mono text-xs uppercase outline-none ${hexValid ? 'border-black/10 focus:border-black/40' : 'border-red-500'}`}
          />
          <button
            onClick={() => select(hexInput)}
            disabled={!hexValid}
            className="shrink-0 rounded-md bg-black text-white px-3 py-2 text-xs disabled:opacity-40"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

// Client-only: reads localStorage on first render
export default dynamic(() => Promise.resolve(RedColorPicker), { ssr: false });
