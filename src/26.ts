import numpy as np

def generate_random_matrix(n):
    """
    Generate a random n x n matrix with non-zero elements.
    
    Parameters:
    n (int): The size of the matrix to be generated.
    
    Returns:
    np.ndarray: A randomly generated n x n matrix filled with non-zero values.
    """
    return np.random.rand(n, n)

# Example usage:
random_matrix = generate_random_matrix(3)
print(random_matrix)
