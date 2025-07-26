# write a function that reverses a string
def reverse_string(s):
    """
    Reverse the given string.
    
    Args:
        s (str): The string to reverse.
        
    Returns:
        str: The reversed string.
    """
    return s[::-1]      

def main():
    # Example usage
    test_strings = [
        "hello",
        "world",
        "Kalvium"
    ]
    
    for s in test_strings:
        reversed_s = reverse_string(s)
        print(f"Original: {s}, Reversed: {reversed_s}")     

if __name__ == "__main__":
    main()
# This code defines a function to reverse a string and includes a main function to test it.