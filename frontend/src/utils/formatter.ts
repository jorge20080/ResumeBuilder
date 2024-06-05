export class Formatter {
    static convertToPlural(text:string){
        let newText;
        if(text[text.length-1]==="y"){
            newText = text.split("");
            newText.pop();
            newText.push("ies");
        }
        return newText
    }
}