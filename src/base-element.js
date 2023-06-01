// @ts-check
import { LitElement } from "lit";
import { DefineableMixin } from "web-component-define";
import { LitScopedElementsMixin } from "web-component-define/exports/lit.js"

export class BaseElement extends DefineableMixin(LitElement) {}

const base = new BaseElement()
