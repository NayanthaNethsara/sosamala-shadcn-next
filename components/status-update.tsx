import { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "../app/firebase";
import { buttonVariants } from "@/components/ui/button";

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

export { MistingNozzleUpdate };
