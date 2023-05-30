// @ts-check
import { LitElement } from "lit";
import { DefineableMixin } from "web-component-define";
import { ScopedElementsMixin } from "@open-wc/scoped-elements"

export class BaseElement extends ScopedElementsMixin(DefineableMixin(LitElement)) {}
