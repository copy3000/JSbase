
    function ftoc(fahrenheit)
{
    const fTemp = fahrenheit;
    const fToC = (fTemp - 32) * 5 / 9;
    const message = `${fTemp} is ${fToC}`;
    console.log(message);
}

ftoc(355);