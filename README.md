# A collection of my side/pet projects and code snippets

<<<<<<< HEAD
[#1](https://github.com/Kishanshah147/Projects-codeSnippets/tree/main/json-to-csv)
=======
[#1](https://github.com/facebook/react/wiki/Sites-Using-React)
>>>>>>> 2a24e7cc3e1b5fd6253aefe2fddc7c5c8c27f441

## json-to-csv


*Nested JSON to CSV Converter.*

This python script converts valid, preformatted JSON to CSV which can be opened in excel and other similar applications.
This script can handle nested json with multiple objects and arrays.
Please see the explanation below and the sample files to understand how this works. It can handle non similar objects too. But, more the similarity of the objects, prettier the output.

Written in Python 2.7. Last tested in Python 3.6.3.

Usage
-----

```
python /path/to/json_to_csv.py node json_in_file_path csv_out_file_path
```

Source Specification
--------------------
The script expects the json to be given via a file containing 

* A valid JSON
* The JSON can be an `Array` of `node` `Object`
Ex:-
```python
    {
        "node":[
            {
                "item_1":"value_11",
                "item_2":"value_12",
                "item_3":"value_13",
                "item_4":["sub_value_14", "sub_value_15"],
                "item_5":{
                    "sub_item_1":"sub_item_value_11",
                    "sub_item_2":["sub_item_value_12", "sub_item_value_13"]
                }
            },
            {
                "item_1":"value_21",
                "item_2":"value_22",
                "item_4":["sub_value_24", "sub_value_25"],
                "item_5":{
                    "sub_item_1":"sub_item_value_21",
                    "sub_item_2":["sub_item_value_22", "sub_item_value_23"]
                }
            }
        ]
    }
```
* The JSON can be a `list` of `dictionaries`
* If your JSON is a list of dictionaries, the first argument `node` can be any relevant string
```python
    [
        {
            "item_1":"value_11",
            "item_2":"value_12",
            "item_3":"value_13",
            "item_4":["sub_value_14", "sub_value_15"],
            "item_5":{
                "sub_item_1":"sub_item_value_11",
                "sub_item_2":["sub_item_value_12", "sub_item_value_13"]
            }
        },
        {
            "item_1":"value_21",
            "item_2":"value_22",
            "item_4":["sub_value_24", "sub_value_25"],
            "item_5":{
                "sub_item_1":"sub_item_value_21",
                "sub_item_2":["sub_item_value_22", "sub_item_value_23"]
            }
        }
    ]
```


[#2](https://github.com/Kishanshah147/Projects-codeSnippets/tree/main/KaggleProjects)

## KaggleProjects
