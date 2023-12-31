# DataViz

Contributions:
- DSL Idea/Write up/Server: Tyler
- Github/Pages/Default Set Up: Madi
- Converting to python/Additonal block features: Austin
- Creating graphs with pandas: Diego
- Create Blocks/Generating Code: Austin, Madi, Diego, Tyler

Motivation:
Our project of incorporating Blockly and custom add-ons for data exploration and visualization in data science has the potential to make it more accessible to a wider audience. It can streamline the process of creating, experimenting with, and sharing data visualizations, ultimately enhancing decision-making across various domains, even outside of data science.


Videos
- https://www.youtube.com/playlist?list=PL6rDyxPExh7Tz7ywNUjjBJ4H3SKH4Q3_Q 

How to Use:
- Access our blockly at https://madischultz.github.io/DataViz/src/ through github pages

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
     
How to add on & Future contributions: 
- Our inital next steps were to add machine learning models to show how simple it is to build something as simple as a linear regression model. This is something we would like to add in the future.
- Another future contributions worth noting is configuring this application to be on different machines (server-side and client-side). Currently, the images are generated can only be saved on the same local machines. We intend to have it display on the client end. 

