Blockly.Blocks['abs'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck("var")
        .appendField("lam");
    this.appendValueInput("EXPR")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['app'] = {
  init: function() {
    this.appendValueInput("EXPR1")
        .setCheck(["var", "exp", "Number"])
        .appendField("app");
    this.appendValueInput("EXPR2")
        .setCheck(["var", "exp", "Number"]);
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("x"), "NAME");
    this.setOutput(true, "var");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['math_number'] = {
  /**
   * Block for numeric value.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('3'), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
Blockly.JavaScript.forBlock['abs'] = function(block) {
  var var_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE);
  var expr_code = Blockly.JavaScript.valueToCode(block, 'EXPR', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + var_name + ' => ' + expr_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['app'] = function(block) {
  var expr1_code = Blockly.JavaScript.valueToCode(block, 'EXPR1', Blockly.JavaScript.ORDER_NONE);
  var expr2_code = Blockly.JavaScript.valueToCode(block, 'EXPR2', Blockly.JavaScript.ORDER_NONE);
  var code = '(' + expr1_code + ')(' + expr2_code + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript.forBlock['var'] = function(block) {
  var var_name = block.getFieldValue('NAME');
  var code = var_name;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.Blocks['math_arithmetic'] = {
  /**
   * Block for arithmetic operations.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.setOutput(true, 'Number');
    this.appendValueInput('A')
        .setCheck(['Number', 'var', 'exp']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']]), 'OP');
    this.appendValueInput('B')
        .setCheck(['Number', 'var', 'exp']);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_ARITHMETIC_TOOLTIP);
  }
};

// Blockly.Blocks['plot_data'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("x = ");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldTextInput("\"K\""), "x");
//     this.appendDummyInput()
//         .appendField(",   y = ");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldTextInput("\"sse\""), "y");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldDropdown([["bar plot",  "geom_line"], ["line plot", "line_plot_id"], ["box plot", "geom_boxplot"]]), "NAME");
//     this.appendDummyInput()
//         .appendField("Dataset: ");
//     this.appendValueInput("data")
//         .setCheck(null);
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };


Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Link to input data: ")
        .appendField(new Blockly.FieldTextInput("https://raw.githubusercontent.com/cmparlettpelleriti/CPSC392ParlettPelleriti/master/Data/Music_data.csv"), "input_data");
    this.appendDummyInput();
    this.appendDummyInput();
    this.appendDummyInput();
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



// Blockly.Python['import'] = function(block) {
//   var text_inputdata = block.getFieldValue('input_data');
//   // Assemble Python code to import data into a Pandas DataFrame
//   var code = `import pandas as pd\n`;
//   code += `df = pd.read_csv('${text_inputdata}')\n`;
//   return [code, Blockly.Python.ORDER_FUNCTION_CALL];
// };

Blockly.Python['import'] = function(block) {
  var text_inputdata = block.getFieldValue('input_data');
  // Assemble Python code to import data into a Pandas DataFrame
  var code = `pd.read_csv('${text_inputdata}')`;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// dataframe blocks
Blockly.Blocks['dataframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dataframe");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null)
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['dataframe'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `# new_df\n`;
  code += `same_df = ${value_name}`;
  return code + '\n';
}

Blockly.Blocks['plot_one'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("1D Plot: ");
    this.appendDummyInput()
        .appendField("x: ");
    this.appendEndRowInput()
        .appendField(new Blockly.FieldTextInput("mode"), "x");
    this.appendEndRowInput()
        .appendField("Plot Type:  ")
        .appendField(new Blockly.FieldDropdown([["bar plot",  "geom_bar("], ["density plot", "geom_density("], ["dot plot", "geom_dotplot("]]), "plotType");
    // this.appendDummyInput()
    //     .appendField(",   y = ");
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldTextInput("\"sse\""), "y");
    this.appendEndRowInput()
        .appendField("Plot Color:  ")
        .appendField(new Blockly.FieldDropdown([["Black",'fill = "black"'], ["Red",'fill = "red"'], ["Blue", 'fill = "blue"'], ["Green", 'fill = "green"']]), "myColor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['plot_one'] = function(block) {
  var x_title = block.getFieldValue('x');
  var plot_type = block.getFieldValue('plotType');
  var color = block.getFieldValue('myColor');

  var code = `${plot_type}same_df, aes(x='${x_title}'), ${color})`;
  return code
};

// 2D Plots
Blockly.Blocks['plot_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2D Plot: ");
    this.appendDummyInput()
        .appendField("x:  ")
        .appendField(new Blockly.FieldTextInput("danceability"), "x")
        .appendField("‎   y:  ")
        .appendField(new Blockly.FieldTextInput("energy"), "y");
    this.appendDummyInput()
        .appendField("Plot Type:  ")
        .appendField(new Blockly.FieldDropdown([["Scatter Plot","geom_point("], ["Line Plot","geom_line("], ["Histogram","geom_histogram("], ["Regression", "stat_smooth("]]), "Plot_Type");
    this.appendDummyInput()
        .appendField("Plot Color:  ")
        .appendField(new Blockly.FieldDropdown([["Black",'color = "black"'], ["Red",'color = "red"'], ["Blue", 'color = "blue"'], ["Green", 'color = "green"']]), "myColor");

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['plot_2d'] = function(block) {
  var x_title = block.getFieldValue('x');
  var y_title = block.getFieldValue('y');
  var plot_type = block.getFieldValue('Plot_Type');
  var color = block.getFieldValue('myColor');

  var code = `${plot_type}same_df, aes(x='${x_title}', y='${y_title}'), ${color})`;
  return code
};


// dropNA
Blockly.Python['remove_null'] = function(block) {
  var code = `same_df = same_df.dropna()`;
  return code + '\n';
};

Blockly.Blocks['remove_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove Null Values");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['combine_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dataset 1: ");
    this.appendValueInput("dataset1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Dataset 2: ");
    this.appendValueInput("dataset2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// 'plot' block definition
Blockly.Blocks['plot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data: ");
    this.appendStatementInput("inData")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Plots:");
    // this.appendDummyInput()
    //     .appendField("x:")
    //     .appendField(new Blockly.FieldTextInput("energy"), "x")
    //     .appendField(",   y: ")
    //     .appendField(new Blockly.FieldTextInput("loudness"), "y");
    this.appendStatementInput("myplot")
        .setCheck(null);
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 'plot' Python generator
Blockly.Python['plot'] = function(block) {
  // var x_title = block.getFieldValue('x');
  // var y_title = block.getFieldValue('y');
  var input_data = Blockly.Python.statementToCode(block, 'inData', Blockly.Python.ORDER_NONE);
  var plot_data = Blockly.Python.statementToCode(block, 'myplot', Blockly.Python.ORDER_NONE).trim();

  var code = input_data;

  // code += `plotName = (ggplot(same_df, aes(x='${x_title}', y='${y_title}')) ${plot_data})\n`;
  code += `plotName += ${plot_data}\n`

  return code + '\n';
};

// 'fullCanvas' block definition
Blockly.Blocks['fullCanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Canvas:")
        .appendField(new Blockly.FieldTextInput("canvasName"), "canvasName");
    this.appendDummyInput()
        .appendField("Theme: ")
        .appendField(new Blockly.FieldDropdown([["gray","theme_gray"], ["minimal","theme_minimal"], ["classic","theme_classic"], ["black and white","theme_bw"]]), "theme");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "savePlot")
        .appendField("Save Plot");
    this.appendStatementInput("plots")
        .setCheck(null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 'fullCanvas' Python generator
Blockly.Python['fullCanvas'] = function(block) {
  var canvasName = block.getFieldValue('canvasName');
  var theme = block.getFieldValue('theme');
  var savePlot = block.getFieldValue('savePlot') == "TRUE";
  var plotsCode = Blockly.Python.statementToCode(block, 'plots', Blockly.Python.ORDER_NONE);

  // if canvasName isn't a valid python variable name, set it to 'myCanvas'
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(canvasName)) {
    canvasName = 'myCanvas';
  }

  var code = `${canvasName} = ggplot()\n\n`

  var count = 0;
  for (var line of plotsCode.split('\n')) {
    if (line.includes('new_df')) {
      count++;
      line = line.replaceAll('new_df', `df${count}`);
    }
    if (line.includes('same_df')) {
      line = line.replaceAll('same_df', `df${count}`);
    }
    if (line.includes('plotName')) {
      line = line.replaceAll('plotName', canvasName);
    }
    if (line.includes('df')) {
      line = line.trim();
    }
    if (line.includes(')geom')) {
      line = line.replaceAll(')geom', `)\n${canvasName} += geom`);
    }
    if (line.includes(')stat')) {
      line = line.replaceAll(')stat', `)\n${canvasName} += stat`);
    }
    code += line + '\n';
  }
  
  code = code.trimEnd();
  code += '\n';
  code += `${canvasName} += ${theme}()\n\n`

  if (savePlot) {
    code += `ggsave(${canvasName}, filename='${canvasName}.png')\n`;
  }

  code += `${canvasName}\n`

  return code;
};


