#pragma strict
var Import : UnityEngine.UI.InputField;
var Export : UnityEngine.UI.Text;

var numboro: int;

var imports = new Array ();
var Imports : String;

var str : String;

//Sh!t for reading
var sr : StreamReader;
var line;
var level : TextAsset;
var number2 : int;

function Changer () {
	Imports = Import.text;
	numboro = 1; 
	imports.Clear();
	while (numboro < Import.text.length + 1) { 
		if (Imports.Substring(numboro - 1, 1) == "A" || Imports.Substring(numboro - 1, 1) == "a") {
			PlayerPrefs.SetInt("Start", 1);
			PlayerPrefs.SetInt("End", 5107);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "B" || Imports.Substring(numboro - 1, 1) == "b") {
			PlayerPrefs.SetInt("Start", 5107);
			PlayerPrefs.SetInt("End", 9941);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "C" || Imports.Substring(numboro - 1, 1) == "c") {
			PlayerPrefs.SetInt("Start", 9941);
			PlayerPrefs.SetInt("End", 18035);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "D" || Imports.Substring(numboro - 1, 1) == "d") {
			PlayerPrefs.SetInt("Start", 18035);
			PlayerPrefs.SetInt("End", 23621);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "E" || Imports.Substring(numboro - 1, 1) == "e") {
			PlayerPrefs.SetInt("Start", 23621);
			PlayerPrefs.SetInt("End", 27231);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "F" || Imports.Substring(numboro - 1, 1) == "f") {
			PlayerPrefs.SetInt("Start", 27231);
			PlayerPrefs.SetInt("End", 30786);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "G" || Imports.Substring(numboro - 1, 1) == "g") {
			PlayerPrefs.SetInt("Start", 30786);
			PlayerPrefs.SetInt("End", 33462);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "H" || Imports.Substring(numboro - 1, 1) == "h") {
			PlayerPrefs.SetInt("Start", 33462);
			PlayerPrefs.SetInt("End", 36479);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "I" || Imports.Substring(numboro - 1, 1) == "i") {
			PlayerPrefs.SetInt("Start", 36479);
			PlayerPrefs.SetInt("End", 40001);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "J" || Imports.Substring(numboro - 1, 1) == "j") {
			PlayerPrefs.SetInt("Start", 40001);
			PlayerPrefs.SetInt("End", 408080);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "K" || Imports.Substring(numboro - 1, 1) == "k") {
			PlayerPrefs.SetInt("Start", 408080);
			PlayerPrefs.SetInt("End", 41506);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "L" || Imports.Substring(numboro - 1, 1) == "l") {
			PlayerPrefs.SetInt("Start", 41506);
			PlayerPrefs.SetInt("End", 44028);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "M" || Imports.Substring(numboro - 1, 1) == "m") {
			PlayerPrefs.SetInt("Start", 44028);
			PlayerPrefs.SetInt("End", 48682);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "N" || Imports.Substring(numboro - 1, 1) == "n") {
			PlayerPrefs.SetInt("Start", 48682);
			PlayerPrefs.SetInt("End", 50163);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "O" || Imports.Substring(numboro - 1, 1) == "o") {
			PlayerPrefs.SetInt("Start", 50163);
			PlayerPrefs.SetInt("End", 52387);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "P" || Imports.Substring(numboro - 1, 1) == "p") {
			PlayerPrefs.SetInt("Start", 52387);
			PlayerPrefs.SetInt("End", 58939);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "Q" || Imports.Substring(numboro - 1, 1) == "q") {
			PlayerPrefs.SetInt("Start", 58939);
			PlayerPrefs.SetInt("End", 59387);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "R" || Imports.Substring(numboro - 1, 1) == "r") {
			PlayerPrefs.SetInt("Start", 59387);
			PlayerPrefs.SetInt("End", 64279);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "S" || Imports.Substring(numboro - 1, 1) == "s") {
			PlayerPrefs.SetInt("Start", 64279);
			PlayerPrefs.SetInt("End", 73434);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "T" || Imports.Substring(numboro - 1, 1) == "t") {
			PlayerPrefs.SetInt("Start", 73434);
			PlayerPrefs.SetInt("End", 77642);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "U" || Imports.Substring(numboro - 1, 1) == "u") {
			PlayerPrefs.SetInt("Start", 77642);
			PlayerPrefs.SetInt("End", 80314);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "V" || Imports.Substring(numboro - 1, 1) == "v") {
			PlayerPrefs.SetInt("Start", 80314);
			PlayerPrefs.SetInt("End", 81686);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "W" || Imports.Substring(numboro - 1, 1) == "w") {
			PlayerPrefs.SetInt("Start", 81686);
			PlayerPrefs.SetInt("End", 83650);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "X" || Imports.Substring(numboro - 1, 1) == "x") {
			PlayerPrefs.SetInt("Start", 83650);
			PlayerPrefs.SetInt("End", 83697);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "Y" || Imports.Substring(numboro - 1, 1) == "y") {
			PlayerPrefs.SetInt("Start", 83697);
			PlayerPrefs.SetInt("End", 83929);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "Z" || Imports.Substring(numboro - 1, 1) == "z") {
			PlayerPrefs.SetInt("Start", 83929);
			PlayerPrefs.SetInt("End", 84095);
			Adder();
			imports[numboro] = PlayerPrefs.GetString("Word") + " ";
		}else if (Imports.Substring(numboro - 1, 1) == "") {
			imports[numboro] = ", ";
		}else {
			Debug.Log("Error");
		}
		Debug.Log("Success x" + numboro);
		numboro ++; //Adds one to Numboro
		str = Array(imports).Join("");
	}
	Export.text = str;
	Debug.Log(str);
}

function Adder () {
	level = Resources.Load("JustEveryWordEver", typeof(TextAsset));
	sr = new StreamReader(new MemoryStream(level.bytes));
	var number = Random.Range(PlayerPrefs.GetInt("Start"), PlayerPrefs.GetInt("End"));
	while (number > number2) {
		line = sr.ReadLine();
		number2++;
	}
	PlayerPrefs.SetString("Word", line);
	number2 = 0;
	sr.Close();
}

function MainMenu () { //Love how I have complicated Sh!t and then I have a simple return to ManMenu function
	Application.LoadLevel ("MainMenu");
}