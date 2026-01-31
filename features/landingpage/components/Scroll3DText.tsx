import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import React from "react";


const Scroll3DText = () => {
   const array = ["KON","VO","ABEY","OYY","SUN","DEKH"]
 let text = "Mera naam Sujal Singh Mehra hai aur main Pithoragarh district se hoon. Abhi main GBPIET Pauri se engineering kar raha hoon, jahan padhai aur passing marks ka ek alag hi struggle chalta rehta hai 😅. Main padhai mein zyada topper-type nahi hoon, lekin mujhe nayi cheezein seekhna kaafi pasand hai — especially jab cheez practical ho. By nature main thoda lazy hoon, lekin jab kisi cheez mein interest aa jaye to poori dedication ke saath lag jata hoon. Main web aur app developer hoon, jise UI banana, ideas ko code mein convert karna aur naye tools explore karna achha lagta hai. Coding ke saath-saath mujhe rap sunna aur likhna bhi pasand hai, aur kabhi-kabhi creativity code aur lyrics dono mein nikal aati hai 🎧💻. Mujhe content creation mein bhi interest hai kyunki apne thoughts aur ideas logon tak pahunchana mujhe exciting lagta hai. Dost zyada nahi hain, lekin main naye logon se milna aur unki stories sunna pasand karta hoon. Overall, main ek curious aur creative insaan hoon jo life ko apni pace pe explore kar raha hai 🚀"
    return (
    <div className=" bg-amber-700 ">
        <Skiper28 text={text} arr={array} />
        
      
    </div>
  );
};

export default Scroll3DText;
