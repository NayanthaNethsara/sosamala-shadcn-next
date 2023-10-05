'use client';
import { useEffect, useState } from "react";
import { ref, onValue,set } from "firebase/database";
import { db } from "../app/firebase";
import { Progress } from "@/components/ui/progress"
import { buttonVariants } from "@/components/ui/button";


const Humidity = () => {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const humidityRef = ref(db, "Sosamala/SensorData/Humidity");
    onValue(humidityRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data);
    });
  }, []);

  return (
    <>
      {humidity !== null ? (
        <div className="text-xl font-regular leading-tight tracking-tighter md:text-xl">
          Humidity : {humidity} %
        </div>
      ) : (
        "Loading..."
      )}
      <div className="w-[400px]">
        <Progress value={humidity || 0} /> {/* Use humidity as the value */}
      </div>
    </>
  );
};

  const Temperature = () => {
    const [temperature, setTemperature] = useState(null);
  
    useEffect(() => {
      const temperatureRef = ref(db, "Sosamala/SensorData/Temperature");
      onValue(temperatureRef, (snapshot) => {
        const data = snapshot.val();
        setTemperature(data);
      });
    }, []);
  
    return (
      <>
        {temperature !== null ? (
          <div className="text-xl font-regular leading-tight tracking-tighter md:text-xl">
            Temperature : {temperature} %
          </div>
        ) : (
          "Loading..."
        )}
        <div className="w-[400px]">
          <Progress value={temperature || 0} /> {/* Use humidity as the value */}
        </div>
      </>
    );
  };

  const Moisture = () => {
    const [moisture, setMoisture] = useState(null);
  
    useEffect(() => {
      const moistureRef = ref(db, "Sosamala/SensorData/Moisture");
      onValue(moistureRef, (snapshot) => {
        const data = snapshot.val();
        setMoisture(data);
      });
    }, []);
  
    return (
      <>
        {moisture !== null ? (
          <div className="text-xl font-regular leading-tight tracking-tighter md:text-xl">
            Moisture : {moisture} %
          </div>
        ) : (
          "Loading..."
        )}
        <div className="w-[400px]">
          <Progress value={moisture || 0} /> {/* Use humidity as the value */}
        </div>
      </>
    );
  };

  const MistingNozzleUpdate = () => {
  const [newMistingNozzle, setNewMistingNozzle] = useState("");
  const [isMistingNozzleOn, setIsMistingNozzleOn] = useState(false); // Track the current state

  // Read the current state of MistingNozzle from Firebase and update the state
  useEffect(() => {
    const mistingNozzleRef = ref(db, "Sosamala/Status/MistingNozzle");
    onValue(mistingNozzleRef, (snapshot) => {
      const currentValue = snapshot.val();
      setIsMistingNozzleOn(currentValue);
    });
  }, []);

  const handleUpdateMistingNozzle = () => {
    const mistingNozzleRef = ref(db, "Sosamala/Status/MistingNozzle");
    const newValue = !isMistingNozzleOn; // Toggle the value

    set(mistingNozzleRef, newValue);
  };

  return (
    <button onClick={handleUpdateMistingNozzle} className={buttonVariants({ variant: isMistingNozzleOn ? "destructive" : "default" })}>
      {isMistingNozzleOn ? "Turn Off Misting Nozzle" : "Turn On Misting Nozzle"}
    </button>
  );
};
  

  
  export { Humidity,Moisture,Temperature , MistingNozzleUpdate};