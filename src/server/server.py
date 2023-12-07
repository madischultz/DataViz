import pandas as pd
from plotnine import *
import io
import base64
import matplotlib.pyplot as plt

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/execute-code', methods=['POST'])
def execute_code():
    # code = request.args.get('code', default='', type=str)
    data = request.get_json()
    code = data.get('code')

    print(f'Code: {code}')

    try:

        # code_string = 'result = 3 + 4'
        local_variables = {}
        exec(code, globals(), local_variables)

        # Now you can access the result variable from local_variables
        df = local_variables['df']
        plt = local_variables['plt']
        print(plt)
        

        # Save the plot as an image
        image_path = 'image.png'
        plt.save(image_path)

        # Encode the image as base64 (optional)
        with open(image_path, 'rb') as image_file:
            encoded_image_data = base64.b64encode(image_file.read()).decode('utf-8')

        # Return the image file path or base64-encoded image data
        return {"image_path": image_path, "encoded_image_data": encoded_image_data}
    

    except Exception as e:
        return f'Error: {str(e)}'
    

if __name__ == '__main__':
    app.run(debug=True)
