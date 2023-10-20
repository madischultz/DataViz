Blockly demo

- Access our presentation: https://docs.google.com/presentation/d/1E4X336iszAeC5SX_QoV9ttY3jbIWKszzFDEKNGJQEKY/edit?usp=sharing 

- Access our blockly at https://madischultz.github.io/DataViz/prototype/ through github pages

- Manipulate Blocks
1. Drag the "Dataframe" block to the right side
2. Place the "Link to input data.." block inside of the Dataframe block
3. Attach "Remove Null Values" block underneath that
4. Attach desired plot block, for example, "x = ..." block underneath that, and choose desired options or leave the default
5. Attach "theme" block, and chose
6. Attach "Export Plot" underneath that

7. Click "Generate Python"
8. (If running locally) Click "Save Python" 

- Run locally OR in colab: 

- Locally:
* pip install pandas
* pip install ggplot
* Run the generated_code.py file from the directory it's saved to:
* python3 generated_code.py
* The plot png will be downloaded

* Colab:
* Copy generated python code
* Press play to run
* image will show up in files tab in the notebook
* Optional: add line: 
plt
to display image below the code after running
