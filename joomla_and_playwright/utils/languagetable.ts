const stringtable = {
    "loginform": {
      "username": {
        "eng": "username",
        "de": "Benutzername"
      },
      "password": {
        "eng": "password",
        "de": "Passwort"
      },
    }
  }
  

   export function lang(page: string, element: string,  language: string){
    type ObjectKey = keyof typeof stringtable;
    var _language = language as ObjectKey ;
    var _page = page as ObjectKey ;
    var _element = element as ObjectKey;

    //console.log("stringtable: " + stringtable.loginform[_mystring][_language]);
    return stringtable[_page][_element][_language];
  }