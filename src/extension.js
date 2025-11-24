// extension.js – minimal activation stub for the RJS syntax extension

/**
 * @param {import('vscode').ExtensionContext} context
 */
function activate(context) {
  // No runtime behavior needed; the extension provides only language configuration and grammar.
  console.log('RJS Syntax Highlight extension activated');
}

function deactivate() {}

module.exports = { activate, deactivate };
