# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

# 8 kyu

defmodule Codewars do
  require Integer

  def even_or_odd(number) do
    if Integer.is_even(number) do
      "Even"
    else
      "Odd"
    end
  end
end
