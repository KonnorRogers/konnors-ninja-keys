// @ts-check
import { LitElement } from "lit";
import { DefineableMixin } from "web-component-define/exports/define.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements"

export class BaseElement extends ScopedElementsMixin(DefineableMixin(LitElement)) {}
