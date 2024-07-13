require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set
local M = {}

M.dap = {
  plugin = true,
  n = {
    ["<leader>db"] = { --debugger breakpoint
      "<cmd> DapToggleBreakpoint <CR>", -- toggle breakpoint at the same line
      "Add breakpoint at line",
    },
    ["<leader>dr"] = {
      "<cmd> DapContinue <CR>", --dap continue line or start or end debugger
      "Start or continue the debugger",

    }
  }
}


map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")


return M
