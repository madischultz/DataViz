# DataViz
## Website: https://madischultz.github.io/DataViz/milestone1/

Group members: Madi Schultz, Austin Simpson, Diego Lopez Ramos, Tyler Kay

Our project of incorporating Blockly and custom add-ons for data exploration and visualization in data science has the potential to make it more accessible to a wider audience. It can streamline the process of creating, experimenting with, and sharing data visualizations, ultimately enhancing decision-making across various domains, even outside of data science.

We will use parsing to interpret and translate the data that is taken in to be visualized. Our project will be able to receive data in different formats, and we will need to parse through it in certain cases to make it easier to interpret. 

In our DataViz project, we aim to develop a Domain Specific Language (DSL) for data visualization using Blockly. The first step in this process involves parsing, where we translate the Blockly blocks that contain formatted attributes (such as JSON) into general language code (like python) so that it can be understood by data visualization libraries. Users interact with these blocks to create visualizations, and the system validates these interactions through parsing to ensure they conform to the DSL's rules. This validation step is crucial for verification, ensuring that the blocks are used in a manner that is both syntactically and semantically correct. Once the blocks are parsed and validated, interpretation comes into play. The system maps each block to specific data visualization functions and parameters, which are then compiled into executable code to render the final visualization.
