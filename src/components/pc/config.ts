const mainThemeColor1 = "#648BDE";
const mainThemeColor2 = "#4895C2";
const mainThemeColor3 = "#4ea3d4";
const mainThemeColor4 = "#367DA2";
const mainThemeColor5 = "#333333";
const mainThemeColor6 = "#151515";

const config = {
    "header": {
        "height": 100,
        "minHeight": 50,
        "maxHeight": 100,
        "fontSize": 30,
        "minFontSize": 15,
        "maxFontSize": 30
    },
    "sidebar" : {
        "width" : 300,
        "backgroundColor" : mainThemeColor1,
        "color" : "#EDFFED",
        "title" : {
            "marginTop" : 10,
            "marginBottom" : 30,
            "fontSize" : 40,
            "fontWeight" : 650
        },
        "img" : {
            "width" : 150,
            "borderRadius": 3
        },
        "contactIconContainer" : {
            "marginTopBottom" : 20,
            "height" : 30
        },
        "contactIcon" : {
            "margin" : 5,
            "width" : 30,
            "height" : 30,
            "backgroundColor" : "#494952",
            "borderRadius" : 4,
            "hover" : {
                "backgroundColor" : "#262626"                
            }
        },
        "infoItem" : {
            "marginTopBottom" : 10,
            "fontWeight" : 600,
            "hover" : {
                "color" : mainThemeColor6
            }
        },
        "subTitleContainer" : {
            "marginTop" : 50                        
        },
        "subTitleBox" : {
            "color" : "#eee",
            "fontSize" : 24,
            "margin" : 10,
            "fontWeight" : 600,
            "selected" : {
                "color" : mainThemeColor6
            },
            "hover" : {
                "color" : mainThemeColor6
            }
        },
        "content" : {
            "padding" : 30,            
        }
    },
    "skills" : {
        "itemMarginBottom" : 30,
        "title" : {
            "color" : mainThemeColor4,
            "fontSize" : 1.3
        },
        "list" : {
            "padding": 0,
            "margin": 10,
            "color" : mainThemeColor5
        }
    },
    "experience" : {
        "contentMargin" : 50
    },
    "A" : {
        "color" : "#1A0DAB"
        
    },
    "H1" : {
        "color" : mainThemeColor2,
        "paddingTopBottom" : 20,
        "borderBottom" : `5px solid ${mainThemeColor1}`,
        "width" : 50,
        "marginBottom" : 50
    },
    "H2" : {
        "color" : mainThemeColor2
    },
    "H3" : {
        "color" : mainThemeColor3
    },
    "H4" : {
        "marginTopBottom" : 20,
        "marginLeft" : 30,
        "fontSize" : 1.3,
        "color" : mainThemeColor5,
        "fontWeight" : 750
    },
    "P" : {
        "color" : mainThemeColor5,
        "lineHeight" : 180,
        "fontWeight" : 570
    },
    "Li" : {
        "color" : mainThemeColor5,
        "margin" : 10,
        "fontWeight" : 550,
        "lineHeight" : 150
    },
    "contentMargin" : 130
} 

export default config;