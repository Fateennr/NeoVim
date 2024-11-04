local lspconfig = require("lspconfig")

lspconfig.clangd.setup({
  cmd = { "clangd", "--background-index" },
  filetypes = { "c", "cpp", "objc", "objcpp" },
  root_dir = lspconfig.util.root_pattern("compile_commands.json", ".git"),
  on_attach = function(client, bufnr)
    -- Custom on_attach functions, such as keybindings, can go here
  end,
})
