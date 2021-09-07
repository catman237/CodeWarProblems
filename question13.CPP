// make a string uppercase 
// 8 kyu
#include <string>

std::string makeUpperCase (const std::string& input_str)
{
  std::locale loc;
  std:: string newString = input_str;
  
  for(int i = 0; i < input_str.length(); i++){
    newString[i] = toupper(input_str[i], loc);
  }
  return newString;
}