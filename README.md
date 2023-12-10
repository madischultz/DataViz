# DataViz

Contributors: Tyler Kay, Austin Simpson, Madi Schultz, Diego Lopez Ramos

Our project of incorporating Blockly and custom add-ons for data exploration and visualization in data science has the potential to make it more accessible to a wider audience. It can streamline the process of creating, experimenting with, and sharing data visualizations, ultimately enhancing decision-making across various domains, even outside of data science.


Videos
- 

Blockly demo

- Access our presentation: https://docs.google.com/presentation/d/1E4X336iszAeC5SX_QoV9ttY3jbIWKszzFDEKNGJQEKY/edit?usp=sharing 

- Access our blockly at https://madischultz.github.io/DataViz/src/ through github pages

Manipulate Blocks

    1. Drag the "Dataframe" block to the right side
    2. Place the "Link to input data.." block inside of the Dataframe block
    3. Attach "Remove Null Values" block underneath that
    4. Attach desired plot block, for example, "x = ..." block underneath that, and choose desired options or leave the default
    5. Attach "theme" block, and chose
    6. Attach "Export Plot" underneath that
    7. Click "Generate Python"
    8. (If running locally) Click "Save Python" 

Run locally OR in colab: 

* Locally:
    * pip install pandas
    * pip install plotnine
    * pip install Flask
    * pip install flask_cors
 
    * To run the Flask server, cd into /src/server and run server.py
      
    * If you just want the .py code that's generated, click Save Python and run the generated_code.py file from the directory it's saved to:
        * python3 generated_code.py
        * The png will be downloaded in the same directory


* Colab:
    * Copy generated python code
    * Press play to run
    * Image will show up in files tab in the notebook
    * (Optional) type additional line: plt
        * displays image below the code after running
