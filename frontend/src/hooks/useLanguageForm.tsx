import { useState } from "react";

const useLanguageForm = () =>{
    const [languages, setLanguages] = useState<String[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState("");
    const [showLanguageForm, setShowLanguageForm] = useState(false);

    const handleAddLanguage = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(currentLanguage){
            setLanguages(langs=>[...langs, currentLanguage]);
            setCurrentLanguage("");
        }
    }
    const handleCancelLanguage = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setShowLanguageForm(false);
    }
    const handleCurrentLanguageChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setCurrentLanguage(e.target.value)
    }
    return {handleAddLanguage, languages, showLanguageForm, handleCancelLanguage, setShowLanguageForm, currentLanguage, handleCurrentLanguageChange}
}
export default useLanguageForm;