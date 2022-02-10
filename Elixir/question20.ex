# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

defmodule Challenge do
  def get_middle(str) do
    len = String.length(str)
    case rem(len, 2) do
      1 -> String.at(str, div(len, 2))
      _ -> String.slice(str, div(len, 2) - 1, 2)
    end
  end
end
