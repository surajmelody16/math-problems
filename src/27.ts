def calculate_area(shape, dimensions):
    if shape == "rectangle":
        return dimensions[0] * dimensions[1]
    elif shape == "circle":
        radius = dimensions[0]
        area = 3.14 * radius ** 2
        return area
    else:
        raise ValueError("Unsupported shape")

# Example usage:
shape = "rectangle"
dimensions = (1, 2)
print(calculate_area(shape, dimensions))
