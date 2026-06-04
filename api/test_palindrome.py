import pytest
from palindrome import is_palindrome

def test_standard_palindrome():
    assert is_palindrome("A man a plan a canal Panama") == True
    assert is_palindrome("Madam In Eden Im Adam") == True

def test_non_palindrome():
    assert is_palindrome("Hello World") == False
    assert is_palindrome("Python") == False

def test_empty_string():
    assert is_palindrome("") == True

def test_single_character():
    assert is_palindrome("a") == True
    assert is_palindrome("Z") == True

    
                