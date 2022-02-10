# Create a method upper_case? to see whether the string is ALL CAPS.

defmodule StringUtils do
  def upper_case?(str), do: String.upcase(str) == str
end
