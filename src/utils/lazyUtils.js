import React from "react";

export default function lazyPreload(importStatement) {
  const Component = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
}
