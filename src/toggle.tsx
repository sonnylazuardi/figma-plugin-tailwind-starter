import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-4">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        style={{ width: 74, height: 38 }}
        className={`${enabled ? "bg-blue-900" : "bg-gray-200"}
          relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          style={{ width: 34, height: 34 }}
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
}
