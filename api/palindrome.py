def is_palindrome(s):
    # Remove spaces and convert to lowercase
    cleaned_s = s.replace(" ", "").lower()
    
    # Check if the cleaned string is equal to its reverse
    return cleaned_s == cleaned_s[::-1]