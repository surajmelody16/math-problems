import numpy as np
from scipy.optimize import minimize
import pandas as pd

# Example data points
data = {
    'x1': [1.0, 2.0, 3.0],
    'y1': [4.0, 5.0, 6.0]
}

df = pd.DataFrame(data)
