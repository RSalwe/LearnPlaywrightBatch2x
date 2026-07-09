//creating the object with type as unknown
let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}
interface elementI {
    tagName: string;
    textContent: string;
    id: string;
    disabled: boolean
};
let button = element as elementI;

console.log("Tag Name: ", button.tagName);
console.log("Text Content: ", button.textContent);
console.log("Id: ", button.id);
console.log("Disabled: ", button.disabled);




