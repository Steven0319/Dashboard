import React from "react";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected title="Dashboard" />
      <Route Icon={FiUsers} title="Team" />
      <Route Icon={FiPaperclip} title="Invoices" />
      <Route Icon={FiLink} title="Integrations" />
      <Route Icon={FiDollarSign} title="Finance" />
    </div>
  );
};

const Route = ({
  selected = false,
  Icon,
  title,
}: {
  selected?: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      aria-current={selected ? "page" : undefined}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        selected
          ? "bg-violet-100 text-violet-700 shadow-sm"
          : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
      }`}
    >
      <Icon
        size={18}
        className={`${selected ? "text-violet-700" : "text-stone-500"} transition-colors`}
      />
      <span>{title}</span>
    </button>
  );
};
