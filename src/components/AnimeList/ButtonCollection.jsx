"use client"
import { CheckCircle, Heart } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const ButtonCollection = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)
    const handleCollention = async(event) => {
        event.preventDefault()

        const data = {anime_mal_id, user_email, anime_image, anime_title}
        const response = await fetch('/api/v1/collections', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.status == 200) {
            setIsCreated(collection.isCreated)
        } 
        return
    }

  return (  
    <div>
        {isCreated ? alert("Added to collection") : 
      <button onClick={handleCollention} className="fixed lg:top-36 lg:left-80 text-white">
        <Heart
          size={40}
          className="text-color-accent hover:text-red-500 m-1"
        />
      </button>
        }
    </div>
  );
};

export default ButtonCollection