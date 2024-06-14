import { Section, Textarea, Textbox } from "htmljs-code";

class App {
    static Init() {
        var fullName = new Textbox({
            FieldName: "appointment_name",
            PlainText: "FullName",
        }, document.getElementsByName("appointment_name")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "appointment_email",
            PlainText: "E-Mail",
        }, document.getElementsByName("appointment_email")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "appointment_phone",
            PlainText: "Phone Number",
        }, document.getElementsByName("appointment_phone")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "appointment_website",
            PlainText: "Your Website",
        }, document.getElementsByName("appointment_website")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "name",
            PlainText: "Name",
        }, document.getElementsByName("name")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "email",
            PlainText: "E-Mail",
        }, document.getElementsByName("email")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "phone",
            PlainText: "Phone Number",
        }, document.getElementsByName("phone")[0]);
        fullName.Render();

        var fullName = new Textbox({
            FieldName: "website",
            PlainText: "Your Website",
        }, document.getElementsByName("website")[0]);
        fullName.Render();

        var fullName = new Textarea({
            FieldName: "message",
            PlainText: "Your message Here",
        }, document.getElementsByName("message")[0]);
        fullName.Render();
        
    }
}

App.Init();