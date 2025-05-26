import { BellIcon, CalendarRangeIcon, ChartColumnBigIcon, HouseIcon, MailIcon, SquareLibraryIcon, Users2Icon } from "lucide-react";
import React from "react";

export const sidebar_items = [
  {
    href: "/mentor/home",
    icon: HouseIcon,
    label: "Trang chủ",
  },
  {
    href: "/mentor/calendar",
    icon: CalendarRangeIcon,
    label: "Lịch hẹn",
  },
  {
    href: "/mentor/student",
    icon: Users2Icon,
    label: "Học viên",
  },
  {
    href: "/mentor/course",
    icon: SquareLibraryIcon,
    label: "Khóa học",
  },
  {
    href: "/mentor/setting",
    icon: MailIcon,
    label: "Tin nhắn",
  },
  {
    href: "/mentor/setting",
    icon: BellIcon,
    label: "Thông báo",
  },
];
