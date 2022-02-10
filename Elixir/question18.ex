# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

defmodule Inverter do
  def invert(list), do: Enum.map(list, fn x -> x * -1 end)
end
