function convert() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const value = parseFloat(document.getElementById("value").value);

    if (!isNaN(value)) {
        let result;

        // Conversion logic for different unit categories
        if (fromUnit === "meter" && toUnit === "feet") {
            result = value * 3.28084;
        } else if (fromUnit === "meter" && toUnit === "inches") {
            result = value * 39.3701;
        } else if (fromUnit === "meter" && toUnit === "centimeter") {
            result = value * 100;
        } else if (fromUnit === "meter" && toUnit === "kilometer") {
            result = value / 1000;
        } else if (fromUnit === "feet" && toUnit === "meter") {
            result = value / 3.28084;
        } else if (fromUnit === "feet" && toUnit === "inches") {
            result = value * 12;
        } else if (fromUnit === "feet" && toUnit === "centimeter") {
            result = value * 30.48;
        } else if (fromUnit === "feet" && toUnit === "kilometer") {
            result = value / 3280.84;
        } else if (fromUnit === "inches" && toUnit === "meter") {
            result = value / 39.3701;
        } else if (fromUnit === "inches" && toUnit === "feet") {
            result = value / 12;
        } else if (fromUnit === "inches" && toUnit === "centimeter") {
            result = value * 2.54;
        } else if (fromUnit === "inches" && toUnit === "kilometer") {
            result = value / 39370.1;
        } else if (fromUnit === "centimeter" && toUnit === "meter") {
            result = value / 100;
        } else if (fromUnit === "centimeter" && toUnit === "feet") {
            result = value / 30.48;
        } else if (fromUnit === "centimeter" && toUnit === "inches") {
            result = value / 2.54;
        } else if (fromUnit === "centimeter" && toUnit === "kilometer") {
            result = value / 100000;
        } else if (fromUnit === "kilometer" && toUnit === "meter") {
            result = value * 1000;
        } else if (fromUnit === "kilometer" && toUnit === "feet") {
            result = value * 3280.84;
        } else if (fromUnit === "kilometer" && toUnit === "inches") {
            result = value * 39370.1;
        } else if (fromUnit === "kilometer" && toUnit === "centimeter") {
            result = value * 100000;
        }
         else if (fromUnit === "second" && toUnit === "minute") {
            result = value / 60;
        } else if (fromUnit === "minute" && toUnit === "second") {
            result = value * 60;
        } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (value * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (value - 32) * 5/9;
        } else if (fromUnit === "bit" && toUnit === "byte") {
            result = value / 8;
        } else if (fromUnit === "byte" && toUnit === "bit") {
            result = value * 8;
        } else if (fromUnit === "kilobyte" && toUnit === "byte") {
            result = value * 1024;
        } else if (fromUnit === "byte" && toUnit === "kilobyte") {
            result = value / 1024;
        } else if (fromUnit === "megabyte" && toUnit === "kilobyte") {
            result = value * 1024;
        } else if (fromUnit === "kilobyte" && toUnit === "megabyte") {
            result = value / 1024;
        } else if (fromUnit === "gigabyte" && toUnit === "megabyte") {
            result = value * 1024;
        } else if (fromUnit === "megabyte" && toUnit === "gigabyte") {
            result = value / 1024;
        } else if (fromUnit === "terabyte" && toUnit === "gigabyte") {
            result = value * 1024;
        } else if (fromUnit === "gigabyte" && toUnit === "terabyte") {
            result = value / 1024;
        } else {
            result = value; // Same units
        }

        document.getElementById("result").innerHTML = `${value} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}