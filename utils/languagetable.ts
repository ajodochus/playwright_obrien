const stringtable = {
    "loginform": {
      "name": {
        "eng": "username",
        "de": "Benutzername"
      },
      "pagetitle": {
        "eng": "my page",
        "de": "meine Seite"
      },
    }
  }
  

   export function get_string_in_correct_language(myString: string,  language: string){
    type ObjectKey = keyof typeof stringtable;
    var _language = language as ObjectKey ;
    var _mystring = myString as ObjectKey ;

    //console.log("stringtable: " + stringtable.loginform[_mystring][_language]);
    return stringtable.loginform[_mystring][_language];
  }