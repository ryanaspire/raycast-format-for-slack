/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Auto-format in Slack - Automatically apply Slack's formatting shortcut (Cmd+Shift+F) after pasting */
  "autoFormat": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `paste-as-slack-mrkdwn` command */
  export type PasteAsSlackMrkdwn = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `paste-as-slack-mrkdwn` command */
  export type PasteAsSlackMrkdwn = {}
}

