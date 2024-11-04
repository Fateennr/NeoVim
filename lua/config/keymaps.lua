-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
--
--
--for running the cpp and c file
vim.keymap.set("n", "<leader>r", function()
  -- Get current file's directory, name without extension, and extension
  local filepath = vim.fn.expand("%:p")
  local filedir = vim.fn.expand("%:p:h") .. "/"
  local filename_no_ext = vim.fn.expand("%:t:r")
  local file_extension = vim.fn.expand("%:e")

  -- Print values to check them
  print("Filepath:", filepath)
  print("File directory:", filedir)
  print("Filename without extension:", filename_no_ext)
  print("File extension:", file_extension)

  -- Or use vim.notify if you prefer
  vim.notify("Filepath: " .. filepath)
  vim.notify("File directory: " .. filedir)
  vim.notify("Filename without extension: " .. filename_no_ext)
  vim.notify("File extension: " .. file_extension)

  -- Choose compiler based on file extension
  local compiler = file_extension == "c" and "gcc" or file_extension == "cpp" and "g++" or nil
  if not compiler then
    vim.notify("Unsupported file type: only .c and .cpp files are supported")
    return
  end

  -- Compile and execute the file
  vim.cmd(
    "!cd "
      .. filedir
      .. " && "
      .. compiler
      .. " "
      .. filepath
      .. " -o "
      .. filedir
      .. filename_no_ext
      .. " && "
      .. filedir
      .. filename_no_ext
      .. " <in.txt > out.txt"
  )
end)
