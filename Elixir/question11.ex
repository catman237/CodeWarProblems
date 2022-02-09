# Description:
# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

# 7 kyu

defmodule Kata do
  def find_short(s) do
    s
    |> String.split(" ")
    |> Enum.map(fn str -> String.length(str) end)
    |> Enum.sort()
    |> List.first()
  end
end
