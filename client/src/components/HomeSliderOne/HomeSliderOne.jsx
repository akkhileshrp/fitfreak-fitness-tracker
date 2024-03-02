import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import "./HomeSliderOne.css";

const HomeSliderOne = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            let temp = [
                {
                    "name": "Calories Intake",
                    "value": 2000,
                    "unit": "kcal",
                    "goal": 2500,
                    "goalUnit": "kcal",
                },
                {
                    "name": "Sleep",
                    "value": 8,
                    "unit": "hrs",
                    "goal": 7,
                    "goalUnit": "hrs",
                }
            ];
            setData(temp);
        };
        getData();
    }, []);

    function simplifyFraction(numerator, denominator) {
        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }
        const commonDivisor = gcd(numerator, denominator);
        const simplifiedNumerator = numerator / commonDivisor;
        const simplifiedDenominator = denominator / commonDivisor;
        return [simplifiedNumerator, simplifiedDenominator];
    }

    return (
        <div className="meter">
            {data?.length > 0 && data.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <div className="card-header-box">
                            <div className="card-header-box-name">{item.name}</div>
                            <div className="card-header-box-value">{item.value} {item.unit}</div>
                        </div>

                        <div className="card-header-box">
                            <div className="card-header-box-name">Target</div>
                            <div className="card-header-box-value">{item.goal} {item.goalUnit}</div>
                        </div>
                    </div>
                    <CircularProgress
                        color="primary"
                        determinate
                        variant="solid"
                        size="lg"
                        value={(item.value / item.goal) * 100}
                        style={{color: "black", marginTop: "25px"}}
                    >
                        {simplifyFraction(item.value, item.goal)[0] + "/" + simplifyFraction(item.value, item.goal)[1]}
                    </CircularProgress>
                    <button>Show Report</button>
                </div>
            ))}
        </div>
    );
};

export default HomeSliderOne;
