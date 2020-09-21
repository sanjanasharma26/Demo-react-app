import React from 'react';


const Bmi = () => {
    return (
    <>
        <h1> BMI Calculator </h1>
        <form>
            <div>
                <label>weight: </label>
                <input type='number' name='' id='weight' placeholder='weight in kg' />
            </div>

            <div>
                <label>height: </label>
                <input type='number' name='' id='height' placeholder='height in meters' />
            </div>

            <div>
                <label>BMI Value: </label>
                <input type='number' name='' id='bmivalue' />
            </div>

            <div>
                <button type='submit' onClick={getbmivalue}> Check BMI </button>
            </div>
        </form>
    </>
    )
};



function getbmivalue() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025

    var newbmivalue = weight / (height*height);
    document.getElementById('bmivalue').value = newbmivalue;

    if (newbmivalue<18) {
    	document.write("you are underweight");
        }
        else {
     	document.write("you are a kid")
        }
};

export default Bmi;