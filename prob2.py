"""
Program to check if a given word is palindrome or not. Character case should be ignored
"""


word = input("Enter Word : ")
word.lower()
if word == word[::-1]:
    print("is palindrome")
else:
    print("not palindrome")
