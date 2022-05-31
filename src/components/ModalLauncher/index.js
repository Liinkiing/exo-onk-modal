import React from "react";
import { Button } from "@ornikar/kitt";

export default function ModalLauncher() {
  return (
    <Button type="primary">
      Show Modal{" "}
      <span role="img" aria-label="so cool">
        😎
      </span>
    </Button>
  );
}
