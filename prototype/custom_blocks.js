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

Blockly.Blocks['plot_one'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x = ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("CGPA"), "x");
    // this.appendDummyInput()
    //     .appendField(",   y = ");
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldTextInput("\"sse\""), "y");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["bar plot",  "geom_bar"], ["density plot", "geom_density"], ["dot plot", "geom_dotplot"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['plot_2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("2D Plot: ");
    this.appendDummyInput()
        .appendField("x:  ")
        .appendField(new Blockly.FieldTextInput("SOP"), "x")
        .appendField("‎   y:  ")
        .appendField(new Blockly.FieldTextInput("CGPA"), "y");
    this.appendDummyInput()
        .appendField("plot type:  ")
        .appendField(new Blockly.FieldDropdown([["Scatter Plot","geom_point"], ["Line Plot","geom_line"], ["Histogram","geom_histogram"]]), "Plot_Type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Link to input data: ")
        .appendField(new Blockly.FieldTextInput("https://raw.githubusercontent.com/cmparlettpelleriti/CPSC392ParlettPelleriti/master/Data/GradAdmissions.csv"), "input_data");
    this.appendDummyInput();
    this.appendDummyInput();
    this.appendDummyInput();
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dataframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dataframe");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['themes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Theme: ")
        .appendField(new Blockly.FieldDropdown([["gray","theme_gray"], ["minimal","theme_minimal"], ["classic","theme_classic"], ["black and white","theme_bw"]]), "theme");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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

Blockly.Python['dataframe'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // Assemble Python code to import data into a Pandas DataFrame
  var code = `import pandas as pd\n`;
  code += `from plotnine import *\n\n`;
  code += `df = ${value_name}\n`;
  return code
}

Blockly.Python['plot_one'] = function(block) {
  var x_title = block.getFieldValue('x');
  var y_title = block.getFieldValue('y');
  var plot_type = block.getFieldValue('NAME');
  
  if (plot_type == "bar plot") {
    plot_type = "geom_bar";
  } else if (plot_type == "density plot") {
    plot_type = "geom_density";
  } else if (plot_type == "dot plot") {
    plot_type = "geom_dotplot";
  }

  var code = `plt = (ggplot(df, aes(x = '${x_title}')) + ${plot_type}()\n`;
  console.log(code);
  return code
};

Blockly.Python['plot_2d'] = function(block) {
  var x_title = block.getFieldValue('x');
  var y_title = block.getFieldValue('y');
  var plot_type = block.getFieldValue('Plot_Type');

  var code = `plt = (ggplot(df, aes(x = '${x_title}', y = '${y_title}')) + ${plot_type}()\n`;
  console.log(code);
  return code
};

Blockly.Python['themes'] = function(block) {
  var theme = block.getFieldValue('theme');

  var code = ` + ${theme}())\n`;
  console.log(code);
  return code
};

Blockly.Python['remove_null'] = function(block) {
  var code = `df = df.dropna()\n`;
  return code
};

// Blockly.JavaScript.forBlock['import'] = function(block) {
//   var text_inputdata = block.getFieldValue('inputData');
//   // Assemble Python code to import data into a Pandas DataFrame
//   // var code = `import pandas as pd\n`;
//   // code += `df = pd.read_csv('${text_inputdata}')\n`;
//   var code = `print('hello')\n)`
//   return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
// };


Blockly.Blocks['export'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Export Plot");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['export'] = function(block) {
  var code = `plt.save('plot.png')\n`;
  return code
};

Blockly.Blocks['remove_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove Null Values");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Blockly.Blocks['plot_group'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Plot");
//     this.appendStatementInput("group")
//         .setCheck(null);
//     this.setInputsInline(false);
//     this.setColour(230);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// Blockly.Python['plot_groups'] = function(block) {
//   var code = `)\n`;
//   return code
// };