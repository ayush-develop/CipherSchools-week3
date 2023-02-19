import React, {useEffect, useState} from "react";
//import Axios from "axios";
import { getAllPhotos } from "../apis/apis";
const Photos = () => { 
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect (() => {
        // Make an API call to get all photos
        // update state
        // set isLoading false
        // fetch("https://jsonplaceholder.typicode.com/photos")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((json) =>  {
        //         setPhotoList(json);
        //     })
        //     .finally(()=> setIsLoading(false));
        //Axios.get("https://jsonplaceholder.typicode.com/photos")
        getAllPhotos()
            .then((response) => {
                let foundPhotos= response.data;
                setPhotoList (foundPhotos);
            })
            .catch((err) => console.error(err))
            .finally (() => setIsLoading (false));
    },[]);
    if (isLoading) {
        return <h4>Loading...</h4>
    }
    return (
        <div>
            {photoList.map((photo,index)=> {
                <div key={index}>
                    <img src={photo.url} alt={photo.title}/>
                </div>
            })}
        </div>
    );
};

export default Photos;