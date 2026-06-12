"use client";

import type { CSSProperties } from "react";
import type { LayoutDividerState } from "../types";

function box(state: LayoutDividerState): CSSProperties {
  return { width: state.width, minHeight: state.height, padding: state.padding, margin: state.margin, display: "grid", placeItems: "center", borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily };
}

export default function LivePreview({ state }: { state: LayoutDividerState }) {
  const isVertical = state.orientation === "vertical";
  const separatorRole = state.decorative || state.role === "presentation" ? "presentation" : "separator";
  const style = box(state);
  const lineStyle: CSSProperties = { width: isVertical ? state.thickness : state.length, height: isVertical ? state.length : state.thickness, borderRadius: 999, background: state.accent, transition: state.motion ? "opacity 0.3s ease" : "none" };
  return <div id={state.id} style={style}><div aria-hidden={state.decorative || undefined} style={{ display: "flex", flexDirection: isVertical ? "column" : "row", alignItems: "center", justifyContent: "center", gap: state.gap, padding: state.inset }}><div role={separatorRole} aria-orientation={separatorRole === "separator" ? state.orientation : undefined} aria-label={separatorRole === "separator" ? state.contentLabel || state.landmarkLabel : undefined} style={lineStyle} />{state.contentLabel && <span style={{ color: state.foreground, fontSize: state.bodySize, fontWeight: state.fontWeight }}>{state.contentLabel}</span>}<div aria-hidden="true" style={lineStyle} /></div></div>;
}
