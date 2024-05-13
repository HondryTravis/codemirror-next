import "./style.css";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap, historyKeymap } from "@codemirror/commands";
import { closeBrackets } from "@codemirror/autocomplete";
import { bracketMatching } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript"
import { solarizedDark } from 'cm6-theme-solarized-dark'
import { search, searchKeymap } from "@codemirror/search";


const str = `import "./style.css";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap, historyKeymap } from "@codemirror/commands";
import { closeBrackets } from "@codemirror/autocomplete";
import { bracketMatching } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript"
import { solarizedDark } from 'cm6-theme-solarized-dark'
import { search, searchKeymap } from "@codemirror/search";

const state = EditorState.create({
  doc: 'var s =1;',
  extensions: [
    lineNumbers(),
    bracketMatching(),
    closeBrackets(),
    javascript(),
    solarizedDark,
    keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap]),
    search({ top: true })
  ]
})

const code = document.createElement('div');
document.querySelector<HTMLDivElement>("#app")!.append(code);

const view = new EditorView({
  state: state,
  parent: code
});

window.$v = view;
window.$s = state;
`

const state = EditorState.create({
  doc: str,
  extensions: [
    lineNumbers(),
    bracketMatching(),
    closeBrackets(),
    javascript(),
    solarizedDark,
    keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap]),
    search({ top: true })
  ]
})

const code = document.createElement('div');
document.querySelector<HTMLDivElement>("#app")!.append(code);

const view = new EditorView({
  state: state,
  parent: code
});

window.$v = view;
window.$s = state;