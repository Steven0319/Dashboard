"use client";

import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  FiEye,
  FiLink,
  FiLogOut,
  FiPhone,
  FiPlus,
} from "react-icons/fi";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  // Keyboard Shortcut ⌘K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl bg-white shadow-lg ring-1 ring-stone-300 animate-in fade-in zoom-in-95"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="Search actions..."
          autoFocus
          className="w-full p-4 text-lg border-b border-stone-200 placeholder:text-stone-400 outline-none"
        />

        <Command.List className="max-h-[400px] overflow-y-auto p-3 space-y-2">
          <Command.Empty className="text-sm text-center text-stone-500 p-3">
            No results found for{" "}
            <span className="text-violet-600 font-semibold">{`"${value}"`}</span>
          </Command.Empty>

          <Command.Group heading="Team" className="text-xs text-stone-500 font-medium px-2">
            <Command.Item className="cmd-item">
              <FiPlus className="text-base" /> Invite Member
            </Command.Item>
            <Command.Item className="cmd-item">
              <FiEye className="text-base" /> See Org Chart
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Integrations" className="text-xs text-stone-500 font-medium px-2">
            <Command.Item className="cmd-item">
              <FiLink className="text-base" /> Link Services
            </Command.Item>
            <Command.Item className="cmd-item">
              <FiPhone className="text-base" /> Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="cmd-item bg-stone-950 text-white hover:bg-stone-900">
            <FiLogOut className="text-base" /> Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
