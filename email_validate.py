
import re
def is_valid_email(email):
    """
    Validate an email address using a regular expression.
    
    Args:
        email (str): The email address to validate.
        
    Returns:
        bool: True if the email is valid, False otherwise.
    """
    # Regular expression for validating an Email
    regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    
    # If the string is empty, return False
    if not email:
        return False
    
    # If the string matches the regex, return True
    if re.match(regex, email):
        return True
    
    return False


def main():
    # Example usage
    test_emails = [
        "jai.kumar#kalvium.community"]  
    for email in test_emails:
        if is_valid_email(email):
            print(f"{email} is a valid email address.")
        else:
            print(f"{email} is not a valid email address.") 


if __name__ == "__main__":
    main()  
    

# This code defines a function to validate email addresses and includes a main function to test it.
# The regular expression used checks for a basic structure of an email address.