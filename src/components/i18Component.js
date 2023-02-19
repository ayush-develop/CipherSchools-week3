import React from 'react'
import {useTranslation, Trans} from "react-i18next";

const i18Component = () => {
    const { t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const index =11;

  return (
    <>
    <div>
       <div>
        <h2>{"welcome to React"}</h2>
        <button onClick={(e)= changeLanguage("de")}>German</button>
        <button onClick={(e)= changeLanguage("en")}>English</button>       
        </div>
    </div>
    <div>

        <Trans>
            To get started, follow me on linkedin
        </Trans>
        <trans i18nKey={"Welcome"}>trans</trans>
        <trans>
            {index +1} <a>---</a>
        </trans>
    </div>
    </>
   
  );
}

export default i18Component;
