# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# 8 kyu

defmodule YesOrNo do
  def boolToWord(b) do
    cond do
      b == true -> "Yes"
      b != true -> "No"
    end
  end
end
