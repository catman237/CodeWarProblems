# Description:
# Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

# For example:

# a = 1
# b = 4
# --> [1, 2, 3, 4]

# 8 kyu

defmodule Kata do
  def between(a, b) do
    Enum.to_list(a..b)
  end
end
