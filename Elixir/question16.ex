# Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

defmodule MinMax do
  def min(list), do: Enum.min(list)
  def max(list), do: Enum.max(list)
end
