# We need a function that can transform a number into a string.

# What ways of achieving this do you know?

# Examples:
# 123 --> "123"
# 999 --> "999"

# 8kyu

defmodule Stringify do
  def number_to_string(n), do: Integer.to_string(n)
end
