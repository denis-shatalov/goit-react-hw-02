import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import { useState, useEffect } from "react";
import Notifications from "./Notifications"

export default function App() {

    const [clicks, setClicks] = useState(() => {
        const saveClicks = localStorage.getItem(`selectedCLicks`);
        if (saveClicks !== null) {
            return saveClicks ? JSON.parse(saveClicks) : { good: 0, neutral: 0, bad: 0 };

        }
    })


    const handleClick = (key) => {
    if (key === "reset") {
        setClicks({ good: 0, neutral: 0, bad: 0 }); 
    } else {
        setClicks({
            ...clicks,
            [key]: clicks[key] + 1
        });
    }
};


    useEffect(() => {
        localStorage.setItem("selectedCLicks", JSON.stringify (clicks))
    },[clicks])
    
    const totalFeedback = clicks?.good + clicks?.neutral + clicks?.bad || 0;


    return (
        <div>

    <Description></Description>
            <Options
                handleClick={handleClick}
                totalFeedback={totalFeedback}>
                </Options>
            {totalFeedback > 0 ? <Feedback clicks={clicks} totalFeedback={totalFeedback}> </Feedback> : <Notifications></Notifications> }
      
        </div>

    )
    
}