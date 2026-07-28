/* @ds-bundle: {"format":3,"namespace":"StereDesignSystem_438e0f","components":[],"sourceHashes":{"ui_kits/_shared/components.jsx":"f5adca8995f9","ui_kits/broker/BookOfBusiness.jsx":"9a280e6bda8f","ui_kits/broker/QuoteForm.jsx":"2aed14b9ed0a","ui_kits/marketing/Hero.jsx":"d62ef18e64c2","ui_kits/marketing/Sections.jsx":"f779bdf63d77","ui_kits/underwriter/EndorsementDrawer.jsx":"12a629371a6b","ui_kits/underwriter/PoliciesTable.jsx":"e85784439884","ui_kits/underwriter/WorkbenchExtras.jsx":"10a19085f4ae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StereDesignSystem_438e0f = window.StereDesignSystem_438e0f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/_shared/components.jsx
try { (() => {
// Shared Stere UI components — small, reusable. Exposed on window.
// Load with <script type="text/babel" src="../_shared/components.jsx"></script>
// (Relative paths from ui_kits/<kit>/index.html.)

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// =========================================================
// Icons — minimal Lucide subset, inline so no CDN needed.
// =========================================================
const I = paths => ({
  size = 16,
  className = ''
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className
}, paths);
const Icon = {
  Home: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  }))),
  File: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }))),
  Clock: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }))),
  Check: I(/*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  Search: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  Edit: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4z"
  }))),
  Chevron: I(/*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })),
  ChevronDown: I(/*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  Plus: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }))),
  Settings: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))),
  Upload: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "21",
    y2: "21"
  }))),
  Message: I(/*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  Layers: I(/*#__PURE__*/React.createElement("path", {
    d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  })),
  Layout: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  }))),
  User: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))),
  Users: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }))),
  Verified: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }))),
  Alert: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }))),
  Bell: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }))),
  Bind: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M9 11l3 3L22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }))),
  Briefcase: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }))),
  TrendUp: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "23 6 13.5 15.5 8.5 10.5 1 18"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "17 6 23 6 23 12"
  }))),
  Database: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5v14a9 3 0 0 0 18 0V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 3 0 0 0 18 0"
  }))),
  X: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))),
  Filter: I(/*#__PURE__*/React.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  })),
  Download: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }))),
  Mail: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }))),
  Phone: I(/*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })),
  Sparkles: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.9 5.8L19.5 11l-5.6 2.2L12 19l-1.9-5.8L4.5 11l5.6-2.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 17v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 19h4"
  }))),
  Arrow: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))),
  Building: I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "22",
    x2: "9",
    y2: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "7",
    x2: "14",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "12",
    x2: "14",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "17",
    x2: "14",
    y2: "17"
  })))
};

// =========================================================
// StereMark — the dot-network glyph as inline SVG.
// =========================================================
function StereMark({
  size = 32,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "198 200 1007.64 1280.29",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Stere"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M923.641 421.377L984.502 482.303C1002.68 500.499 1012.87 525.035 1012.87 550.674V567.766C1012.87 620.974 1056.1 664.257 1109.25 664.257C1162.4 664.257 1205.64 620.974 1205.64 567.766C1205.64 514.559 1162.4 471.276 1109.25 471.276H1092.18C1066.57 471.276 1042.06 461.076 1023.88 442.88L963.022 381.953C944.846 363.758 934.657 339.222 934.657 313.583V296.49C934.657 243.283 891.421 200 838.272 200C785.122 200 741.887 243.283 741.887 296.49C741.887 349.698 785.122 392.981 838.272 392.981H855.346C880.957 392.981 905.466 403.181 923.641 421.377Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1090.25 1208.74H1107.32C1160.47 1208.74 1203.71 1165.46 1203.71 1112.25C1203.71 1059.04 1160.47 1015.76 1107.32 1015.76H1090.25C1064.64 1015.76 1040.13 1005.56 1021.95 987.362L961.092 926.435C942.917 908.24 932.728 883.704 932.728 858.065V840.972C932.728 787.765 889.492 744.482 836.343 744.482H819.269C793.658 744.482 769.149 734.282 750.973 716.086L690.113 655.159C671.938 636.964 661.748 612.428 661.748 586.789V569.696C661.748 516.489 618.513 473.206 565.364 473.206C512.214 473.206 468.979 516.489 468.979 569.696C468.979 622.904 512.214 666.187 565.364 666.187H582.437C608.048 666.187 632.558 676.387 650.733 694.583L711.593 755.509C729.769 773.705 739.958 798.241 739.958 823.88V840.972C739.958 894.18 783.193 937.463 836.343 937.463H853.417C879.028 937.463 903.537 947.663 921.712 965.859L982.573 1026.79C1000.75 1044.98 1010.94 1069.52 1010.94 1095.16V1129.62C1010.94 1155.26 1000.75 1179.79 982.573 1197.99L921.712 1258.91C903.537 1277.11 879.028 1287.31 853.417 1287.31H818.994C793.383 1287.31 768.873 1277.11 750.698 1258.91L689.838 1197.99C671.662 1179.79 661.473 1155.26 661.473 1129.62V1112.52C661.473 1059.32 618.238 1016.03 565.088 1016.03C511.939 1016.03 468.703 1059.32 468.703 1112.52C468.703 1165.73 511.939 1209.01 565.088 1209.01H582.162C607.773 1209.01 632.282 1219.22 650.458 1237.41L711.318 1298.34C729.493 1316.53 739.683 1341.07 739.683 1366.71V1383.8C739.683 1437.01 782.918 1480.29 836.068 1480.29C889.217 1480.29 932.452 1437.01 932.452 1383.8V1366.71C932.452 1341.07 942.642 1316.53 960.817 1298.34L1021.68 1237.41C1039.85 1219.22 1064.36 1209.01 1089.97 1209.01L1090.25 1208.74Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M390.77 840.972C390.77 787.681 347.617 744.481 294.385 744.481C241.153 744.481 198 787.681 198 840.972C198 894.262 241.153 937.462 294.385 937.462C347.617 937.462 390.77 894.262 390.77 840.972Z"
  }));
}

// =========================================================
// BrandHeader — sidebar brand block with Stere mark + name
// =========================================================
function BrandHeader({
  portal = 'Workbench'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(StereMark, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Stere"), /*#__PURE__*/React.createElement("div", {
    className: "brand-sub"
  }, portal)));
}

// =========================================================
// Sidebar — nav with sections; items: {label, icon, count, active, onClick}
// =========================================================
function Sidebar({
  portal,
  sections,
  children
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement(BrandHeader, {
    portal: portal
  }), sections.map(s => /*#__PURE__*/React.createElement("div", {
    className: "nav-section",
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, s.label), s.items.map(it => {
    const IconC = it.icon ? Icon[it.icon] : null;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id || it.label,
      className: `nav-link${it.active ? ' active' : ''}`,
      onClick: e => {
        e.preventDefault();
        it.onClick && it.onClick();
      },
      href: "#"
    }, IconC && /*#__PURE__*/React.createElement(IconC, {
      size: 16
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, it.count));
  }))), children);
}

// =========================================================
// Topbar — search + user
// =========================================================
function Topbar({
  searchPlaceholder = 'Search policies, brokers, claims…',
  user = 'NR',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon.Search, {
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: searchPlaceholder
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, children, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-icon",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon.Bell, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, user)));
}

// =========================================================
// Badge wrapper
// =========================================================
function Badge({
  kind = 'info',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${kind}`
  }, children);
}

// =========================================================
// KPI tile
// =========================================================
function Kpi({
  label,
  value,
  delta,
  deltaDir = 'up',
  sparkSeries,
  signature = false
}) {
  const peaks = sparkSeries || [30, 45, 38, 52, 60, 58, 72, 68, 85, 78, 92, 100];
  return /*#__PURE__*/React.createElement("div", {
    className: `kpi${signature ? ' card-stere' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "kpi-value"
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    className: `kpi-delta ${deltaDir}`
  }, deltaDir === 'up' ? '↑' : '↓', " ", delta), /*#__PURE__*/React.createElement("div", {
    className: "kpi-spark"
  }, peaks.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: `${h}%`
    }
  }))));
}

// =========================================================
// Segmented
// =========================================================
function Segmented({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "segmented"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    className: value === o ? 'active' : '',
    onClick: () => onChange && onChange(o)
  }, o)));
}

// =========================================================
// Modal
// =========================================================
function Modal({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-icon",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon.X, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, footer)));
}

// =========================================================
// Toast
// =========================================================
function Toast({
  message,
  onClose
}) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onClose && onClose(), 3000);
    return () => clearTimeout(t);
  }, [message, onClose]);
  if (!message) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast-dot"
  }), /*#__PURE__*/React.createElement("span", null, message));
}
Object.assign(window, {
  Icon,
  StereMark,
  BrandHeader,
  Sidebar,
  Topbar,
  Badge,
  Kpi,
  Segmented,
  Modal,
  Toast
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/broker/BookOfBusiness.jsx
try { (() => {
// BookOfBusiness.jsx — broker's policy list, default density
const SAMPLE_BOOK = [{
  num: 'HO343EL000199-04',
  name: 'Stark Industries LLC',
  coverage: 'D&O, EPL',
  premium: 23165,
  renewal: '2027-04-15',
  status: 'live'
}, {
  num: 'HO343EL000211-03',
  name: 'Rand Enterprises',
  coverage: 'D&O',
  premium: 18950,
  renewal: '2027-05-22',
  status: 'pending'
}, {
  num: 'HO343EL000228-00',
  name: 'Cage & Wing Security',
  coverage: 'EPL',
  premium: 9420,
  renewal: '2027-04-30',
  status: 'live'
}, {
  num: 'HO343EL000244-02',
  name: 'Nelson, Murdock & Page',
  coverage: 'Cyber',
  premium: 6800,
  renewal: '2027-03-12',
  status: 'live'
}, {
  num: 'HO343EL000255-01',
  name: 'Frontline Couriers Co',
  coverage: 'Auto',
  premium: 41200,
  renewal: '2027-06-08',
  status: 'live'
}];
function BookOfBusiness() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 18
    }
  }, "Your book of business"), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "5 active \xB7 $99,535 total in-force")), /*#__PURE__*/React.createElement("div", {
    className: "table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Policy"), /*#__PURE__*/React.createElement("th", null, "Policyholder"), /*#__PURE__*/React.createElement("th", null, "Coverage"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Annual premium"), /*#__PURE__*/React.createElement("th", null, "Renews"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, SAMPLE_BOOK.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.num
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "policy-num"
  }, p.num)), /*#__PURE__*/React.createElement("td", null, p.name), /*#__PURE__*/React.createElement("td", null, p.coverage), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    },
    className: "num"
  }, "$", p.premium.toLocaleString(), ".00"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, p.renewal), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    kind: p.status
  }, p.status === 'live' ? 'Active' : 'Pending'))))))));
}
Object.assign(window, {
  BookOfBusiness,
  SAMPLE_BOOK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/broker/BookOfBusiness.jsx", error: String((e && e.message) || e) }); }

// ui_kits/broker/QuoteForm.jsx
try { (() => {
// QuoteForm.jsx — broker-facing quote/bind form
const {
  useState: useStateQF
} = React;
function QuoteForm({
  onBound
}) {
  const [stage, setStage] = useStateQF('input'); // input | quoting | quoted | bound
  const [premium, setPremium] = useStateQF(23165);
  const calculate = () => {
    setStage('quoting');
    setTimeout(() => {
      setPremium(Math.floor(18000 + Math.random() * 12000));
      setStage('quoted');
    }, 900);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "New submission"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      marginTop: 4
    }
  }, "Quote a policy")), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "3-week launch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Policyholder name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    defaultValue: "Stark Industries LLC"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "FEIN / Tax ID"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    defaultValue: "98-7654321"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Product"), /*#__PURE__*/React.createElement("select", {
    className: "select",
    defaultValue: "D&O, EPL"
  }, /*#__PURE__*/React.createElement("option", null, "D&O, EPL"), /*#__PURE__*/React.createElement("option", null, "Cyber Liability"), /*#__PURE__*/React.createElement("option", null, "Commercial Auto"), /*#__PURE__*/React.createElement("option", null, "Marine"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Effective date"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    type: "date",
    defaultValue: "2026-06-15"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Coverage limit"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    defaultValue: "$5,000,000"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Deductible"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    defaultValue: "$25,000"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Business description"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    defaultValue: "Industrial manufacturing, R&D, energy systems. ~7,800 employees across 4 facilities."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      padding: '16px 18px',
      background: 'var(--bg-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, stage === 'input' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-default)',
      fontWeight: 500
    }
  }, "Stere AI"), " will quote in < 2 seconds."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: calculate
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 14
  }), "Generate quote")), stage === 'quoting' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, "Calculating premium\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: true,
    style: {
      opacity: 0.5
    }
  }, "Generating\u2026")), stage === 'quoted' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      fontWeight: 500
    }
  }, "Annual premium"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: 'var(--fg-default)',
      lineHeight: 1.1
    }
  }, "$", premium.toLocaleString(), ".00")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setStage('input')
  }, "Re-quote"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setStage('bound');
      onBound && onBound(premium);
    }
  }, /*#__PURE__*/React.createElement(Icon.Bind, {
    size: 14
  }), "Bind policy"))), stage === 'bound' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    kind: "success"
  }, "Bound"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, "Policy ", /*#__PURE__*/React.createElement("span", {
    className: "policy-num"
  }, "HO343EL000231-00"), " issued. Documents emailed.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setStage('input')
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 14
  }), "New quote"))));
}
Object.assign(window, {
  QuoteForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/broker/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// MarketingNav.jsx + MarketingFooter.jsx + HeroSection.jsx — marketing surface pieces
function MarketingNav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 48px',
      background: 'rgba(3,9,23,0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(232,238,247,0.06)',
      color: '#e8eef7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffffff',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(StereMark, {
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: '-0.02em'
    }
  }, "Stere")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      fontSize: 13.5,
      color: '#9fb0c8'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Platform"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Products"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "For Brokers"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "For Carriers"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Pricing")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: '#e8eef7'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm"
  }, "Book a demo")));
}
function HeroSection({
  onStartDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '96px 48px 80px',
      overflow: 'hidden',
      color: '#e8eef7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(at 20% 10%, rgba(61,12,255,0.45) 0%, transparent 50%), radial-gradient(at 80% 0%, rgba(111,249,255,0.28) 0%, transparent 50%), radial-gradient(at 50% 100%, rgba(120,86,255,0.32) 0%, transparent 50%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#6ff9ff',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#6ff9ff',
      boxShadow: '0 0 0 4px rgba(111,249,255,0.25)'
    }
  }), "New \xB7 v1.0 Insurance Infrastructure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-1)',
      letterSpacing: '-0.035em',
      color: '#ffffff',
      lineHeight: 1.02,
      fontSize: 'clamp(48px, 6vw, 76px)',
      margin: '0 0 22px'
    }
  }, "From idea to bound policy in", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg, #6ff9ff 0%, #b8a5ff 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, "3 weeks.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: '#9fb0c8',
      maxWidth: 580,
      marginBottom: 32,
      lineHeight: 1.55
    }
  }, "Stere is the insurance platform that lets product teams launch, price, distribute, and service coverage without rebuilding the back office. One stack \u2014 agents, brokers, underwriters, claims."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gradient btn-lg",
    onClick: onStartDemo
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 16
  }), "Book a demo"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-lg",
    style: {
      background: 'transparent',
      color: '#e8eef7',
      borderColor: 'rgba(232,238,247,0.18)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Layout, {
    size: 16
  }), "Explore the platform")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: '#6d7e98',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e8eef7'
    }
  }, "SOC 2"), " Type II"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e8eef7'
    }
  }, "$4.8B"), " in-force premium"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#e8eef7'
    }
  }, "48"), " insurance products live"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#061229',
      border: '1px solid rgba(232,238,247,0.10)',
      borderRadius: 16,
      overflow: 'hidden',
      padding: 24,
      color: '#e8eef7',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5), 5px 5px 0 -1px rgba(120,86,255,0.55)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 28,
      height: 28,
      background: 'linear-gradient(135deg,#3d0cff,#7856ff)',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: '#6d7e98',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 10
    }
  }, "Underwriter Workbench \xB7 Live"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: '#9fb0c8',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "In-force premium"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 36,
      fontWeight: 500,
      letterSpacing: '-0.025em',
      color: '#ffffff',
      lineHeight: 1.05
    }
  }, "$4.82M"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6ee7b7',
      marginTop: 4
    }
  }, "\u2191 12.4% vs last month")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '2.5px 9px',
      borderRadius: 100,
      fontSize: 11,
      fontWeight: 500,
      background: 'rgba(111,249,255,0.10)',
      color: '#6ff9ff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#6ff9ff',
      boxShadow: '0 0 0 3px rgba(111,249,255,0.18)'
    }
  }), "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'end',
      gap: 4,
      marginBottom: 20
    }
  }, [30, 45, 38, 52, 60, 58, 72, 68, 85, 78, 92, 100, 88, 94].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: 'linear-gradient(180deg, #6ff9ff 0%, #3d0cff 100%)',
      borderRadius: 1,
      opacity: 0.88
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid rgba(232,238,247,0.08)'
    }
  }, [{
    num: 'HO343EL000199-04',
    name: 'Stark Industries',
    k: 'pending',
    l: 'Pending',
    d: '+$2,500'
  }, {
    num: 'HO343EL000200-01',
    name: 'Pym Technologies',
    k: 'success',
    l: 'Approved',
    d: '−$800'
  }, {
    num: 'HO343EL000218-01',
    name: 'Wakanda Vibranium',
    k: 'live',
    l: 'Active',
    d: '+$9,200'
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.num,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.6fr 0.9fr 0.9fr',
      alignItems: 'center',
      gap: 10,
      padding: '10px 0',
      borderBottom: '1px solid rgba(232,238,247,0.06)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#b8a5ff'
    }
  }, r.num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 12,
      color: r.d.startsWith('+') ? '#fda4af' : r.d.startsWith('−') ? '#6ee7b7' : '#9fb0c8',
      textAlign: 'right'
    }
  }, r.d), /*#__PURE__*/React.createElement(Badge, {
    kind: r.k
  }, r.l)))))));
}
function MarketingFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '48px 48px 32px',
      background: '#030917',
      borderTop: '1px solid rgba(232,238,247,0.08)',
      color: '#9fb0c8',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(StereMark, {
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: '#fff',
      fontSize: 16
    }
  }, "Stere")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#6d7e98',
      lineHeight: 1.6,
      fontSize: 12.5
    }
  }, "Insurance infrastructure for product teams. Launch coverage in 3 weeks.")), [{
    title: 'Platform',
    items: ['Underwriter Workbench', 'Broker Portal', 'Agent Portal', 'Admin Console', 'Rating Engine']
  }, {
    title: 'Products',
    items: ['D&O', 'EPL', 'Cyber', 'Commercial Auto', 'Marine']
  }, {
    title: 'Resources',
    items: ['Docs', 'API reference', 'Status', 'Changelog', 'Trust']
  }, {
    title: 'Company',
    items: ['About', 'Customers', 'Careers', 'Contact', 'Privacy']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#fff',
      marginBottom: 12,
      fontWeight: 600
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      fontSize: 12.5
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      color: '#9fb0c8'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '36px auto 0',
      paddingTop: 20,
      borderTop: '1px solid rgba(232,238,247,0.08)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#6d7e98',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Stere Inc."), /*#__PURE__*/React.createElement("span", null, "Made for insurance teams who ship.")));
}
Object.assign(window, {
  MarketingNav,
  HeroSection,
  MarketingFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
// Sections.jsx — features grid, customers strip, CTA band
function CustomersStrip() {
  // Placeholder customer wordmarks — set in mono uppercase so it reads as fictional logos
  const customers = ['STARK', 'PYM TECH', 'OSCORP', 'RAND ENT', 'ASGARD', 'WAKANDA', 'NELSON·M·P', 'DAILY BUGLE'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '60px 48px',
      background: '#030917',
      borderTop: '1px solid rgba(232,238,247,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#6d7e98',
      textAlign: 'center',
      marginBottom: 26
    }
  }, "Trusted by insurance teams shipping faster"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      opacity: 0.85
    }
  }, customers.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      padding: '20px 16px',
      border: '1px solid rgba(232,238,247,0.06)',
      borderRadius: 8,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: '0.04em',
      color: '#9fb0c8'
    }
  }, c)))));
}
function FeaturesGrid() {
  const features = [{
    icon: 'Bind',
    title: 'Bind in seconds',
    body: 'A rating engine, document generator, and digital-bind flow you can ship from day one. No carrier hand-coding.'
  }, {
    icon: 'Layers',
    title: 'Modular by product',
    body: 'D&O, EPL, Cyber, Marine, Auto — turn coverages on per region, per producer, per channel.'
  }, {
    icon: 'Users',
    title: 'One stack, every role',
    body: 'Agents, brokers, underwriters, claims, finance. The same platform in compact, default, and spacious densities.'
  }, {
    icon: 'Sparkles',
    title: 'AI co-pilot built in',
    body: 'Stere AI quotes, drafts endorsements, and flags suspicious claims. Always cite-able to the underlying rule.'
  }, {
    icon: 'Database',
    title: 'Open data model',
    body: 'Read every policy, claim, and ledger event over webhooks and a documented REST API. Your data is yours.'
  }, {
    icon: 'Verified',
    title: 'Compliant by design',
    body: 'SOC 2 Type II, NAIC model audit-ready, surplus-lines tax handling, state-by-state form filings.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '100px 48px',
      background: '#030917',
      color: '#e8eef7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#b8a5ff',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: 12
    }
  }, "What ships with Stere"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-2)',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(34px,4vw,48px)',
      color: '#fff',
      lineHeight: 1.1,
      margin: 0,
      marginBottom: 14
    }
  }, "Every piece of the back office.", /*#__PURE__*/React.createElement("br", null), "None of the rebuilding."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#9fb0c8',
      lineHeight: 1.55,
      margin: 0
    }
  }, "Stere ships the platform a modern carrier or MGA would have spent four years building. Your team focuses on the product, the pricing, and the distribution.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, features.map(f => {
    const IC = Icon[f.icon];
    return /*#__PURE__*/React.createElement("div", {
      key: f.title,
      style: {
        padding: '22px 22px',
        background: '#061229',
        border: '1px solid rgba(232,238,247,0.08)',
        borderRadius: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 8,
        background: 'rgba(120,86,255,0.16)',
        color: '#c4b5fd',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(IC, {
      size: 18
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: '-0.01em',
        color: '#fff',
        margin: '0 0 6px'
      }
    }, f.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: '#9fb0c8',
        lineHeight: 1.55,
        margin: 0
      }
    }, f.body));
  }))));
}
function MetricsBand() {
  const m = [{
    v: '21 days',
    l: 'Idea → bound policy'
  }, {
    v: '$4.82B',
    l: 'In-force premium'
  }, {
    v: '48',
    l: 'Live insurance products'
  }, {
    v: '99.99%',
    l: 'API uptime · trailing 12mo'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      background: '#030917',
      borderTop: '1px solid rgba(232,238,247,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    }
  }, m.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.l,
    style: {
      padding: '8px 24px',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(232,238,247,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(34px,3.8vw,48px)',
      letterSpacing: '-0.03em',
      background: 'linear-gradient(135deg, #6ff9ff 0%, #b8a5ff 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
      lineHeight: 1,
      marginBottom: 8
    }
  }, it.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#6d7e98',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, it.l)))));
}
function CtaBand({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 48px',
      background: '#030917',
      backgroundImage: 'radial-gradient(at 80% 50%, rgba(120,86,255,0.20) 0%, transparent 50%), radial-gradient(at 20% 100%, rgba(111,249,255,0.14) 0%, transparent 50%)',
      borderTop: '1px solid rgba(232,238,247,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      position: 'relative',
      background: '#061229',
      border: '1px solid rgba(232,238,247,0.10)',
      borderRadius: 16,
      overflow: 'hidden',
      padding: '48px 56px',
      boxShadow: '5px 5px 0 -1px rgba(120,86,255,0.55), 0 12px 32px rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 32,
      height: 32,
      background: 'linear-gradient(135deg,#3d0cff,#7856ff)',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: '#6ff9ff',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: 12
    }
  }, "Ship in Q3"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-2)',
      letterSpacing: '-0.03em',
      fontSize: 'clamp(28px,3.4vw,40px)',
      color: '#fff',
      lineHeight: 1.1,
      margin: 0,
      marginBottom: 12
    }
  }, "Launch your next insurance product. ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg, #6ff9ff 0%, #b8a5ff 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, "By 21 days from now.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#9fb0c8',
      fontSize: 15,
      margin: 0,
      maxWidth: 540,
      lineHeight: 1.55
    }
  }, "Tell us what you're building. We'll show you the rating, the bind flow, and the underwriter view of your product \u2014 running on real Stere infrastructure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gradient btn-lg",
    onClick: onDemo
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 16
  }), "Book a demo"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-lg",
    style: {
      background: 'transparent',
      color: '#e8eef7',
      borderColor: 'rgba(232,238,247,0.18)'
    }
  }, "Read the docs", /*#__PURE__*/React.createElement(Icon.Arrow, {
    size: 14
  })))));
}
Object.assign(window, {
  CustomersStrip,
  FeaturesGrid,
  MetricsBand,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/underwriter/EndorsementDrawer.jsx
try { (() => {
// EndorsementDrawer.jsx — slide-in detail panel for a policy.
function EndorsementDrawer({
  policy,
  onClose,
  onApprove,
  onDecline
}) {
  if (!policy) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: 460,
      maxWidth: '92vw',
      background: 'var(--bg-elevated)',
      borderLeft: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 14px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Endorsement"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-icon",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon.X, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "policy-num",
    style: {
      fontSize: 14
    }
  }, policy.num), /*#__PURE__*/React.createElement(Badge, {
    kind: policy.status
  }, statusLabel(policy.status))), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: '-0.02em',
      margin: '4px 0 8px'
    }
  }, policy.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, policy.coverage, " \xB7 Effective ", policy.effective)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-stere",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, "Premium impact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: policy.delta > 0 ? 'var(--status-danger-fg)' : policy.delta < 0 ? 'var(--status-success-fg)' : 'var(--fg-subtle)',
      marginTop: 6,
      lineHeight: 1.1
    }
  }, fmtDelta(policy.delta)), /*#__PURE__*/React.createElement("div", {
    className: "card-desc",
    style: {
      marginTop: 6
    }
  }, "vs in-force annual premium of $23,165.00")), /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16
    }
  }, "Change request")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Effective from"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, policy.effective)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Producer"), /*#__PURE__*/React.createElement("div", null, policy.producer)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Coverage limit"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "$5,000,000")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Deductible"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "$25,000"))), /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16
    }
  }, "Audit trail")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 18
    }
  }, [{
    who: 'N. Romanoff',
    what: 'Endorsement submitted',
    when: '2 min ago',
    ic: 'Edit'
  }, {
    who: 'S. Rogers',
    what: 'Risk score recomputed',
    when: '2 min ago',
    ic: 'Sparkles'
  }, {
    who: 'System',
    what: 'Document generated',
    when: 'Just now',
    ic: 'File'
  }].map((e, i) => {
    const IC = Icon[e.ic];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 6,
        background: 'var(--bg-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--fg-muted)'
      }
    }, /*#__PURE__*/React.createElement(IC, {
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--fg-default)'
      }
    }, e.what), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'var(--fg-subtle)',
        fontFamily: 'var(--font-mono)',
        marginTop: 2
      }
    }, e.who, " \xB7 ", e.when)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--bg-subtle)',
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onDecline
  }, "Decline"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onApprove
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    size: 14
  }), "Approve endorsement")));
}
Object.assign(window, {
  EndorsementDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/underwriter/EndorsementDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/underwriter/PoliciesTable.jsx
try { (() => {
// PoliciesTable.jsx — the workbench's primary view.
const {
  useState: useStateUW
} = React;
const SAMPLE_POLICIES = [{
  num: 'HO343EL000199-04',
  name: 'Stark Industries LLC',
  coverage: 'D&O, EPL',
  effective: '2026-04-15',
  delta: 2500,
  status: 'pending',
  producer: 'Hellmann & Co'
}, {
  num: 'HO343EL000200-01',
  name: 'Pym Technologies Inc',
  coverage: 'Cyber Liability',
  effective: '2026-03-25',
  delta: -800,
  status: 'success',
  producer: 'Lockton'
}, {
  num: 'HO343EL000201-02',
  name: 'Hammer Industries Corp',
  coverage: 'Commercial Auto',
  effective: '2026-05-01',
  delta: 0,
  status: 'info',
  producer: 'Marsh'
}, {
  num: 'HO343EL000204-00',
  name: 'Asgard Realty Holdings',
  coverage: 'EPL',
  effective: '2026-05-10',
  delta: 1200,
  status: 'live',
  producer: 'Aon'
}, {
  num: 'HO343EL000211-03',
  name: 'Rand Enterprises',
  coverage: 'D&O',
  effective: '2026-05-22',
  delta: 3800,
  status: 'pending',
  producer: 'Hellmann & Co'
}, {
  num: 'HO343EL000215-00',
  name: 'Daily Bugle Media',
  coverage: 'Cyber Liability',
  effective: '2026-06-01',
  delta: -1500,
  status: 'success',
  producer: 'Lockton'
}, {
  num: 'HO343EL000218-01',
  name: 'Wakanda Vibranium Mining',
  coverage: 'Marine, Property',
  effective: '2026-06-04',
  delta: 9200,
  status: 'pending',
  producer: 'Direct'
}, {
  num: 'HO343EL000222-00',
  name: 'Oscorp Industries',
  coverage: 'D&O, EPL, Cyber',
  effective: '2026-06-15',
  delta: 0,
  status: 'info',
  producer: 'Marsh'
}];
const statusLabel = k => ({
  pending: 'Pending',
  success: 'Approved',
  info: 'Doc Generated',
  live: 'Active',
  danger: 'Declined'
})[k] || k;
const fmtDelta = n => n === 0 ? 'No change' : n > 0 ? `+$${n.toLocaleString()}` : `−$${Math.abs(n).toLocaleString()}`;
function PoliciesTable({
  onSelect,
  selectedNum
}) {
  const [view, setView] = useStateUW('Grouped by Policyholder');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "filter-bar"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: view,
    onChange: setView,
    options: ['Grouped by Policyholder', 'Standard View', 'Renewals', 'Endorsements', 'Cancellations']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon.Filter, {
    size: 14
  }), "Filter"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon.Download, {
    size: 14
  }), "Export")), /*#__PURE__*/React.createElement("div", {
    className: "table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Policy"), /*#__PURE__*/React.createElement("th", null, "Policyholder"), /*#__PURE__*/React.createElement("th", null, "Coverage"), /*#__PURE__*/React.createElement("th", null, "Effective"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Premium \u0394"), /*#__PURE__*/React.createElement("th", null, "Producer"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, SAMPLE_POLICIES.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.num,
    className: p.num === selectedNum ? 'selected' : '',
    onClick: () => onSelect && onSelect(p)
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "policy-num"
  }, p.num)), /*#__PURE__*/React.createElement("td", null, p.name), /*#__PURE__*/React.createElement("td", null, p.coverage), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, p.effective), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    },
    className: `figure ${p.delta > 0 ? 'up' : p.delta < 0 ? 'down' : 'flat'}`
  }, fmtDelta(p.delta)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--fg-muted)'
    }
  }, p.producer), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    kind: p.status
  }, statusLabel(p.status)))))))));
}
Object.assign(window, {
  PoliciesTable,
  SAMPLE_POLICIES,
  statusLabel,
  fmtDelta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/underwriter/PoliciesTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/underwriter/WorkbenchExtras.jsx
try { (() => {
// WorkbenchExtras.jsx — additional components for the full-showcase workbench:
// AITriage (card-cornered hero), PreferencesCard (toggles + tags + divider),
// NewEndorsementModal, NotificationsPopover.

const {
  useState: useStateWX
} = React;

// ---------------------------------------------------------
// AITriage — hero card-cornered with btn-gradient + tag chips
// ---------------------------------------------------------
function AITriage({
  onAct
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card card-cornered",
    style: {
      padding: '20px 24px',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--brand-electric)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 12
  }), "Stere AI \xB7 Today's triage"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      letterSpacing: '-0.02em',
      margin: 0,
      marginBottom: 6
    }
  }, "5 endorsements need a human. The other 7 are clear."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--fg-muted)',
      margin: 0,
      lineHeight: 1.5,
      maxWidth: 640
    }
  }, "I've pre-scored 12 open endorsements against your rate tables and last-year's bind decisions. Approve the queue in one pass \u2014 or open any item to review the reasoning."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "3 D&O"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "2 EPL"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "1 Cyber"), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "6 Auto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gradient",
    onClick: onAct
  }, /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 14
  }), "Work the queue"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm"
  }, "View reasoning", /*#__PURE__*/React.createElement(Icon.Arrow, {
    size: 13
  })))));
}

// ---------------------------------------------------------
// PreferencesCard — toggles, tags, divider
// ---------------------------------------------------------
function PreferencesCard() {
  const [autoRenew, setAutoRenew] = useStateWX(true);
  const [smsAlerts, setSmsAlerts] = useStateWX(false);
  const [aiAssist, setAiAssist] = useStateWX(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, "Workbench preferences"), /*#__PURE__*/React.createElement("div", {
    className: "card-desc"
  }, "Personalize how this workbench surfaces work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px'
    }
  }, [{
    k: 'auto',
    l: 'Auto-renew suggestions',
    d: "Surface renewals 60 days before expiry.",
    v: autoRenew,
    set: setAutoRenew
  }, {
    k: 'sms',
    l: 'SMS critical alerts',
    d: 'Page me for severity-1 claims.',
    v: smsAlerts,
    set: setSmsAlerts
  }, {
    k: 'ai',
    l: 'AI co-pilot suggestions',
    d: 'Show Stere AI ranking on every endorsement.',
    v: aiAssist,
    set: setAiAssist
  }].map((r, i, arr) => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: i < arr.length - 1 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--fg-default)'
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-subtle)',
      marginTop: 2
    }
  }, r.d)), /*#__PURE__*/React.createElement("label", {
    className: "toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: r.v,
    onChange: e => r.set(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "track"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Density: Compact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm"
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, "Save"))));
}

// ---------------------------------------------------------
// CoverageMixCard — small data viz card (categorical bars)
// ---------------------------------------------------------
function CoverageMixCard() {
  const data = [{
    l: 'D&O',
    v: 38,
    c: '#3d0cff'
  }, {
    l: 'EPL',
    v: 24,
    c: '#7856ff'
  }, {
    l: 'Cyber',
    v: 18,
    c: '#6ff9ff'
  }, {
    l: 'Auto',
    v: 12,
    c: '#ffda83'
  }, {
    l: 'Marine',
    v: 5,
    c: '#ff4a68'
  }, {
    l: 'Property',
    v: 3,
    c: '#10b981'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "card card-stere"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, "Coverage mix"), /*#__PURE__*/React.createElement("div", {
    className: "card-desc"
  }, "In-force premium by coverage line")), /*#__PURE__*/React.createElement(Badge, {
    kind: "live"
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'end',
      gap: 6,
      height: 90,
      marginBottom: 12
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.l,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: d.c,
      borderRadius: '3px 3px 0 0',
      height: `${d.v * 2.2}%`,
      opacity: 0.95
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 4,
      fontSize: 11,
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-mono)'
    }
  }, data.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.l,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, d.l))));
}

// ---------------------------------------------------------
// NewEndorsementModal — showcases Modal + inputs + buttons
// ---------------------------------------------------------
function NewEndorsementModal({
  open,
  onClose,
  onSubmit
}) {
  const [policy, setPolicy] = useStateWX('');
  const [reason, setReason] = useStateWX('Coverage limit increase');
  const [amount, setAmount] = useStateWX('');
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "New endorsement",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        onSubmit && onSubmit({
          policy,
          reason,
          amount
        });
        onClose();
      }
    }, /*#__PURE__*/React.createElement(Icon.Plus, {
      size: 14
    }), "Create endorsement"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Policy number"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    placeholder: "HO343EL000000-00",
    value: policy,
    onChange: e => setPolicy(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "field-help"
  }, "Start typing to search your book.")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Reason"), /*#__PURE__*/React.createElement("select", {
    className: "select",
    value: reason,
    onChange: e => setReason(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Coverage limit increase"), /*#__PURE__*/React.createElement("option", null, "Coverage limit decrease"), /*#__PURE__*/React.createElement("option", null, "Add named insured"), /*#__PURE__*/React.createElement("option", null, "Address change"), /*#__PURE__*/React.createElement("option", null, "Cancel mid-term"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Premium impact"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    placeholder: "$0.00",
    value: amount,
    onChange: e => setAmount(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Effective date"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    type: "date",
    defaultValue: "2026-06-01"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "field-label"
  }, "Note to underwriter"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Optional. Visible in the audit trail."
  }))));
}
Object.assign(window, {
  AITriage,
  PreferencesCard,
  CoverageMixCard,
  NewEndorsementModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/underwriter/WorkbenchExtras.jsx", error: String((e && e.message) || e) }); }

})();
